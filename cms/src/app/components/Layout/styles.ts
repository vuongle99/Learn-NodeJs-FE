import styled from "styled-components";

export const Wrapper = styled.div`
  .side-menu {
    background-color: #fff;
    height: 100vh;
    position: fixed;
    width: 15%;
    text-align: center;
    padding: 0;

    .logo {
      height: 64px;
      background-color: #ffffff;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);

      .title {
        font-size: larger;
        font-weight: 900;
        color: #f06292;
      }
    }

    .user {
      padding: 20px;
      vertical-align: middle;
      display: grid;

      .user-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #fafafa;
        border: 1px solid rgba(0, 0, 0, 0.12);
      }

      .user-name {
        margin-top: 5px;
      }

      .user-actions {
        margin-top: 10px;
        display: flex;
        justify-content: space-around;

        .action-icon {
          cursor: pointer;
        }
      }
    }

    .menu {
      background: "blue";
    }
  }

  .body-container {
    width: 85%;
    margin-left: 15%;
    background-color: #fafafa;
    min-height: 100vh;

    .header {
      z-index: 1000;
      height: 64px;
      background-color: yellow;
      position: fixed;
      width: 85%;
      background-color: #ffffff;
      box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;
      display: flex;
      padding: 10px;
      justify-content: end;
      align-items: center;

      .header-item {
        .header-icon {
          font-size: 40px;
          cursor: pointer;
          margin-left: 10px;
        }
      }
    }

    .content {
      padding: 20px;
      padding-top: 70px;
    }
  }
`;
