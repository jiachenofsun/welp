// import "./Menu.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import FoodItem from "./Components/FoodItem";


function FoodMenu() {
    const [currTime, setCurrTime] = useState('Lunch');
    const [currDH, setCurrDH] = useState('Crossroads');
    const [foodData, setFoodData] = useState();

    const updateMenu = (dh, time) => {
      setCurrDH(dh);
      setCurrTime(time);
      
      // need to make some axios get request
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
              minW="0" w={'135px'}
              transition='all 0.2s'
              borderRadius='md'
              borderWidth='1px'
              _hover={{ bg: 'gray.100' }}
              _expanded={{ bg: 'blue.50' }}
              _focus={{ boxShadow: 'outline' }}          
              >
                {/* {isOpen ? 'Close' : 'Open'} if you want to do anything w opening and closing the menu*/} 
                {currTime}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => updateMenu(currDH, 'Breakfast')}>Breakfast</MenuItem>
                <MenuItem onClick={() => updateMenu(currDH, 'Lunch')}>Lunch</MenuItem>
                <MenuItem onClick={() => updateMenu(currDH, 'Dinner')}>Dinner</MenuItem>
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
                {currDH}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => updateMenu('Cafe 3', currTime)}>Cafe 3</MenuItem>
                <MenuItem onClick={() => updateMenu('Clark Kerr', currTime)}>Clark Kerr</MenuItem>
                <MenuItem onClick={() => updateMenu('Crossroads', currTime)}>Crossroads</MenuItem>
                <MenuItem onClick={() => updateMenu('Foothill', currTime)}>Foothill</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>


        {
        
        foodData && foodData.map(d =>
          <FoodItem title={d.title} rating={d.rating} key={d.id} />
        )
      }
      </div>

      
    );
  }
  
  export default FoodMenu;