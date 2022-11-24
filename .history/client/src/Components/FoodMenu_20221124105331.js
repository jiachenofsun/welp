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
    let currentTime = 'Lunch';
    let currentDH = 'Crossroads';

    const updateMenu = (dh, time) => {

      currentTime = time;
      currentDH = dh;
      // axios.post("http://localhost:3002/post", {
      //   id,
      //   title,
      //   body
      // }).then(function (response) {
      //   const n = props.curr.concat([response.data])
      //   props.func(n)
      // })
      // .catch((error) => console.log(error));
    }


    return (
      <div style={{display:"flex", justifyContent: "center", paddingBottom: 1000}}>
        <p style={{paddingRight: 250, fontSize: 70}}>Menus</p>

        {/* Dropdown Menus were created using Chakra: https://chakra-ui.com/docs/components/menu/usage */}
        {/* TIME DROPDOWN MENU */}
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}
              px={4}
              py={2}
              minW="0" w={'125px'}
              transition='all 0.2s'
              borderRadius='md'
              borderWidth='1px'
              _hover={{ bg: 'gray.100' }}
              _expanded={{ bg: 'blue.50' }}
              _focus={{ boxShadow: 'outline' }}          
              >
                {/* {isOpen ? 'Close' : 'Open'} if you want to do anything w opening and closing the menu*/} 
                {currentTime}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => updateMenu(currentDH, 'Breakfast')}>Breakfast</MenuItem>
                <MenuItem onClick={() => updateMenu(currentDH, 'Lunch')}>Lunch</MenuItem>
                <MenuItem onClick={() => updateMenu(currentDH, 'Dinner')}>Dinner</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>


        {/* DINING HALL DROPDOWN MENU */}
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}
              px={4}
              py={2}
              minW="0" w={'150px'}
              transition='all 0.2s'
              borderRadius='md'
              borderWidth='1px'
              _hover={{ bg: 'gray.100' }}
              _expanded={{ bg: 'blue.50' }}
              _focus={{ boxShadow: 'outline' }}          
              >
                {/* {isOpen ? 'Close' : 'Open'} if you want to do anything w opening and closing the menu*/} 
                {currentDH}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => updateMenu('Cafe 3', currentTime)}>Cafe 3</MenuItem>
                <MenuItem onClick={() => updateMenu('Clark Kerr', currentTime)}>Clark Kerr</MenuItem>
                <MenuItem onClick={() => updateMenu('Crossroads', currentTime)}>Crossroads</MenuItem>
                <MenuItem onClick={() => updateMenu('Foothill', currentTime)}>Foothill</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </div>
    );
  }
  
  export default FoodMenu;