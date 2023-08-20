import React, { useState } from "react";

import { users } from "../../datas";
import "./UserList.css";
import { Link } from "react-router-dom";

//mui
import { DataGrid } from "@mui/x-data-grid";

export default function UserList() {
  const [userDatas, setUserDatas] = useState(users);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userName",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to="">
              <button className="userListEdit">Edit</button>
              <div className="userListUser"></div>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div>
      {/* <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      /> */}

      <DataGrid
        rows={users}
        columns={columns}
        disableRowSelectionOnClick
        pageSizeOptions={[2]}
      />
    </div>
  );
}
