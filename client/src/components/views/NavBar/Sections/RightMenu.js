/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu, Icon, Badge } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

function RightMenu(props) {
  const user = useSelector((state) => state.user);
  const admin = useSelector((state) => state.user.userData);
  // console.log(admin.email);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a className="menuFont" href="/login">
            Signin
          </a>
        </Menu.Item>
        <Menu.Item key="app">
          <a className="menuFont" href="/register">
            Signup
          </a>
        </Menu.Item>
      </Menu>
    );
  } else if (user.userData && user.userData.isAdmin) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="History">
          <a className="menuFont" href="/history">
            History
          </a>
        </Menu.Item>
        <Menu.Item key="upload">
          <a className="menuFont" href="/product/upload">
            Upload
          </a>
        </Menu.Item>
        <Menu.Item key="Cart">
          <Badge count={1}>
            <a href="/user/cart" style={{ marginRight: -20, color: "#667777" }}>
              <Icon
                type="shopping-cart"
                style={{ fontSize: 30, marginBottom: 4 }}
              />
            </a>
          </Badge>
        </Menu.Item>
        <Menu.Item key="logout">
          <a className="menuFont" onClick={logoutHandler}>
            Logout
          </a>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="History">
          <a className="menuFont" href="/history">
            History
          </a>
        </Menu.Item>
        <Menu.Item key="Cart" style={{ paddingBottom: 3 }}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a href="/user/cart" style={{ marginRight: -20, color: "#667777" }}>
              <Icon
                type="shopping-cart"
                style={{ fontSize: 30, marginBottom: 4 }}
              />
            </a>
          </Badge>
        </Menu.Item>
        <Menu.Item key="logout">
          <a className="menuFont" onClick={logoutHandler}>
            Logout
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
