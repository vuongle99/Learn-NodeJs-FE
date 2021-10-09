import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;

  .user-helper {
    display: flex;
    justify-content: flex-end;

    .search-input-wrapper {
      width: 25%;

      .search-input {
      }
    }

    .search-user {
      margin-left: 10px;
    }
  }

  .user-table {
    margin-top: 20px;

    .user-actions {
      display: flex;

      .action {
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;
