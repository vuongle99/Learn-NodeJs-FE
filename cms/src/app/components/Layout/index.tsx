import React, { FunctionComponent } from "react";
import { Menu } from "antd";
import { useHistory } from "react-router";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  BellOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import { Wrapper } from "./styles";
import { IMenuItem } from "../../../interfaces";
import MenuItems from "./menuItems";

interface IProps {
  children: any;
}

const LayOut: FunctionComponent<IProps> = ({ children }) => {
  const history = useHistory();

  const items: IMenuItem[] = MenuItems;

  const onClickMenuItem = (url: string) => {
    history.push(url);
  };

  return (
    <Wrapper>
      <div className="side-menu">
        <div className="display-center logo">
          <span className="title">SKINCARE</span>
        </div>

        <div className="display-center user">
          <div className="display-center user-avatar">
            <UserOutlined style={{ fontSize: "50px" }} />
          </div>
          <div className="user-name">Vuonglee</div>
          <div className="user-actions">
            <div className="action">
              <SettingOutlined
                style={{ fontSize: "20px" }}
                className="action-icon"
              />
            </div>
            <div className="action">
              <LogoutOutlined
                style={{ fontSize: "20px" }}
                className="action-icon"
              />
            </div>
          </div>
        </div>

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["item-1"]}
          style={{ background: "#ffffff", height: "100%" }}
        >
          {items.map((item) => (
            <Menu.Item
              key={item.id}
              icon={<item.icon />}
              onClick={() => onClickMenuItem(item.url)}
            >
              {item.name}
            </Menu.Item>
          ))}
        </Menu>
      </div>

      <div className="body-container">
        <div className="header">
          <div className="header-item">
            <SearchOutlined
              style={{ fontSize: "20px" }}
              className="header-icon"
            />
          </div>

          <div className="header-item">
            <BellOutlined
              style={{ fontSize: "20px" }}
              className="header-icon"
            />
          </div>
        </div>
        <div className="content"> {children}</div>
      </div>
    </Wrapper>
  );
};

export default LayOut;
