export interface IMessage {
  uid: string,
  displayName: string,
  message: string,
  photoURL: string,
  createdAt: {
    seconds: number;
    nanoseconds: number;
  },
}