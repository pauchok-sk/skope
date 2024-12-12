import {  signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth, provider } from "../config/firebase";
import { User as FirebaseUser } from "firebase/auth";

export const loginUser = async () => {
  await signInWithPopup(auth, provider);
};

export async function logoutUser(fn: () => void) {
  signOut(auth)
    .then(() => {
      fn();
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function updateUser(user: FirebaseUser, newUser: FirebaseUser) {
  updateProfile(user, newUser)
    .then(() => {
      console.log("Successfully updated user");
      return "ok";
    })
    .catch((error) => {
      console.log(error);
    });
}