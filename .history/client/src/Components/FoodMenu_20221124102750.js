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
  ChevronDownIcon
} from '@chakra-ui/react'

function FoodMenu() {
    // function that updates display based on current dining hall and time func(dHall, time)


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