// import "./Menu.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'

function Menu() {

    return (
      <div style={{display:"flex", justifyContent: "center", paddingBottom: 1000}}>
        <p style={{paddingRight: 250, fontSize: 70}}>Menus</p>

        {/* Dropdown Menus were created using Chakra: https://chakra-ui.com/docs/components/menu/usage */}
        {/* TIME DROPDOWN MENU */}
        <button style={{padding: 10}}>time</button>


        {/* DINING HALL DROPDOWN MENU */}
        <button style={{padding: 10}} >dining hall</button>
      </div>
    );
  }
  
  export default Menu;