import React, {
  FunctionComponent,
  useState,
  useEffect,
  useCallback,
} from "react";
import { FormOutlined, DeleteOutlined, LockOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { cloneDeep } from "lodash";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Table from "../../components/Table";
import { Wrapper } from "./styles";
import { IUserModel } from "../../../interfaces";
import { getAllUsers, blockUser, deleteUser } from "../../../services";

interface IColumn {
  title: string;
  width?: number;
  dataIndex?: string;
  key: string;
  fixed?: string;
  render?: () => void;
}

interface IProps {}

const UserPage: FunctionComponent<IProps> = () => {
  const [users, setUsers] = useState<IUserModel[]>([]);
  const [emailInput, setEmailInput] = useState<string | null>(null);

  useEffect(() => {
    onGetAllUsersHandler(null);
  }, []);

  const onGetAllUsersHandler = async (queryData: {} | null) => {
    const res: IUserModel[] = await getAllUsers(queryData);

    setUsers(res);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(event.target.value);
  };

  const onSearchUserHandler = useCallback(() => {
    onGetAllUsersHandler({ email: emailInput });
  }, [emailInput]);

  const onBlockUserHandler = useCallback(
    async (userId: string | null | undefined) => {
      const userIndex: number = users.findIndex((user) => user._id === userId);

      if (userIndex === -1) return;

      const res: IUserModel = await blockUser(userId);

      let newUsers: IUserModel[] = cloneDeep(users);
      newUsers[userIndex] = res;

      setUsers(newUsers);
    },
    [users]
  );

  const onDeleteUserHandler = useCallback(
    async (userId: string | null | undefined) => {
      const userIndex: number = users.findIndex((user) => user._id === userId);

      if (userIndex === -1) return;

      const res: any = await deleteUser(userId);

      if (res) {
        let newUsers: IUserModel[] = cloneDeep(users);
        newUsers.splice(userIndex, 1);

        setUsers(newUsers);
      }
    },
    [users]
  );

  const onRenderTableActions = (text: any, user: IUserModel) => {
    return (
      <div className="user-actions">
        <div className="action">
          <Tooltip placement="bottom" title={"Block user"}>
            <LockOutlined
              style={{ fontSize: "20px" }}
              onClick={() => onBlockUserHandler(user._id)}
            />
          </Tooltip>
        </div>

        <div className="action">
          <Tooltip placement="bottom" title={"Update user"}>
            <FormOutlined style={{ fontSize: "20px" }} />
          </Tooltip>
        </div>

        <div className="action">
          <Tooltip placement="bottom" title={"Delete user"}>
            <DeleteOutlined
              style={{ fontSize: "20px" }}
              onClick={() => onDeleteUserHandler(user._id)}
            />
          </Tooltip>
        </div>
      </div>
    );
  };

  const columns: any[] = [
    {
      title: "Email",
      width: 80,
      dataIndex: "email",
      key: "_id",
      fixed: "left",
    },
    {
      title: "Name",
      width: 50,
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      width: 50,
      dataIndex: "isBlock",
      key: "isBlock",
      render: (isBlock: boolean) => <div>{isBlock ? "Blocked" : "Active"}</div>,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 50,
      render: onRenderTableActions,
    },
  ];

  return (
    <Wrapper>
      <div className="user-helper">
        <div className="search-input-wrapper">
          <Input
            className="search-input"
            placeholder="Enter email..."
            onChange={onEmailChange}
          />
        </div>

        <div className="search-user">
          <Button className="search-btn" onClick={onSearchUserHandler}>
            Search
          </Button>
        </div>
      </div>

      <div className="user-table">
        <Table columns={columns} dataSource={users} scroll={{ x: 1000 }} />
      </div>
    </Wrapper>
  );
};

export default UserPage;
