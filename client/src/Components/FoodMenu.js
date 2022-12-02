import "./FoodMenu.css";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import FoodItem from "./FoodItem";


function FoodMenu() {
    const [currTime, setCurrTime] = useState('Lunch');
    const [currDH, setCurrDH] = useState('Crossroads');
    const [foodData, setFoodData] = useState([]);
    const [fullMenu, setFullMenu] = useState({});
    const isMounted = useRef(false);

    useEffect(() => {
      axios
        .get("http://localhost:9000/fetchMenu") //THIS IS YOUR URL OF YOUR API
        .then((data)=>{
          setFullMenu(data.data.menu)
          console.log("received menu", data.data.menu);
        }) //PROMISE API, THAT MEANS WHEN YOU GET THE DATA WHAT DO I DO WITH IT
        .catch((error) => console.log(error));  //ERROR CATCHING IN CASE WE RECIEVE AN ERROR
      }, [])
      
    const updateMenu = (dh, time) => {
      setCurrDH(dh);
      setCurrTime(time);
    }
    

    // FOR WHEN FULLMENU IS FIRST LOADED UP
    useEffect(() => {
      if (Object.keys(fullMenu).length !== 0 && !isMounted.current) {
        isMounted.current = true;
        let diningHall = 'crossroads';
        let currentTime = 'lunch';
        let selectedMenu = fullMenu[diningHall][currentTime];
        setFoodData([...selectedMenu]);
      }
    }, [fullMenu])

    // FOR SUBSEQUENT CHANGES TO CURRTIME OR CURRDH
    useEffect(() => {
      if (isMounted.current) {
        let diningHall = currDH.toLowerCase().replace(/\s/g, '');
        let currentTime = currTime.toLowerCase().replace(/\s/g, '');
        let selectedMenu = fullMenu[diningHall][currentTime];
        setFoodData([...selectedMenu]);
        console.log("useEffect works", selectedMenu);
      }
    }, [currDH, currTime, fullMenu])

    return (
      <div className="mt-5">
       <div class="parentContainer">
         <p class="menuText">Menus</p>
      
         {/* Dropdown Menus were created using Chakra: https://chakra-ui.com/docs/components/menu/usage */}
         {/* TIME DROPDOWN MENU */}
         <Menu>
           {({ isOpen }) => (
             <>
               <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}
               px={4}
               py={2}
               minW="0" w={'225px'}
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
               minW="0" w={'250px'}
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
         
       </div>
       <hr className="w-2/5 m-auto"></hr>
       <div className="mt-5 p-4" style={{display:"flex", justifyContent: "center", flexDirection:'column', alignItems: "center"}}>
         {
         foodData && foodData.map(d =>
           <FoodItem title={d.name} initialRating={d.upvotes - d.downvotes} key={d.name} location={currDH} time={currTime} func={setFullMenu}/>
         )
       }
       </div>
      </div>

      
    );
  }
  
  export default FoodMenu;