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
  Button,
} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'


function FoodMenu() {
    const updateMenu = () => {
      console.log({
        id,
        title,
        body
      })

      axios.post("http://localhost:3002/post", {
        id,
        title,
        body
      }).then(function (response) {
        const n = props.curr.concat([response.data])
        props.func(n)
      })
      .catch((error) => console.log(error));
    }


    return (
      <div style={{display:"flex", justifyContent: "center", paddingBottom: 1000}}>
        <p style={{paddingRight: 250, fontSize: 70}}>Menus</p>

        {/* Dropdown Menus were created using Chakra: https://chakra-ui.com/docs/components/menu/usage */}
        {/* TIME DROPDOWN MENU */}
        <button style={{padding: 10}}>time</button>


        {/* DINING HALL DROPDOWN MENU */}
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
                {isOpen ? 'Close' : 'Dining Hall'}
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </div>
    );
  }
  
  export default FoodMenu;