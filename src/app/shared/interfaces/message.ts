export interface IMessage {
  user_id: IuserID;
  image_id: string;
  msg: string;
}

interface IuserID {
  userName: string;
  _id: string;
}
