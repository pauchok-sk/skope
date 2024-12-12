import { User as FirebaseUser } from "firebase/auth";

export interface IUser {
  displayName: string;
  email: string;
  metadata: {
    createdAt: string;
    creationTime: string;
  },
  phoneNumber: string;
  photoURL: string;
}

export interface UserState {
  isAuth: boolean;
  isLoading: boolean;
  user: FirebaseUser | null;
}