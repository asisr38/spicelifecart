import React from "react";
import { Menu } from "antd";
import "./Navbar.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="home">
        <a className="menuFont" href="/">
          Home
        </a>
      </Menu.Item>
      <Menu.Item key="mail">
        <a className="menuFont" href="/menu">
          Menu
        </a>
      </Menu.Item>
      <Menu.Item key="about">
        <a className="menuFont" href="/aboutUs">
          About us
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
{
  /* <SubMenu title={<span>Blogs</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup>
      </SubMenu> */
}
