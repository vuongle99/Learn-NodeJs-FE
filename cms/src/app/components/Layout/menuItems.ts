import { UserOutlined, HomeOutlined } from "@ant-design/icons";

import { IMenuItem } from "../../../interfaces";

const MenuItems: IMenuItem[] = [
  {
    id: "item-1",
    name: "Home",
    icon: HomeOutlined,
    url: "/home",
  },
  {
    id: "item-2",
    name: "User",
    icon: UserOutlined,
    url: "/users",
  },
];

export default MenuItems;
