export interface IMenuItem {
  id: string;
  name: string;
  icon: any;
  url: string;
}

export interface IUserModel {
  _id?: string;
  name: string;
  email: string;
  isBlock?: boolean;
}
