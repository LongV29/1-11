import { useState, useEffect } from "react";
import getListUsers from "../../mocks/Mocks";
import "./getList.scss";

function GetList(props) {
  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    getListUsers.then((res) => {
      setListUsers(res);
      console.log(res);
    });
  }, []);

  return (
    <div className="getList">
      <h4>TESTIMONIALS</h4>
      <h1>Read What Other have to Say</h1>
      {listUsers.map((user, index) => {
        return (
          <div className="user">
            <div key={index} className="user_mid">
              <img src={user.img} alt="error" />
              <h5>{user.name}</h5>
              <p>{user.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default GetList;
