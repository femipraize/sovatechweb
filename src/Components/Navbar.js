import React, { useState } from 'react';
import Logo from '../Assets/Sovatech Logo.svg';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';


function Navbar() {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
      {
        text:'Home',
        icon:<HomeIcon/>
      },
      {
        text:'About',
        icon:<InfoIcon/>
      },
      {
        text:'Services',
        icon:<InfoIcon/>
      },
      {
        text:'Pricing',
        icon:<HomeIcon/>
      },
      {
        text:'Contact',
        icon:<PhoneRoundedIcon/>
      },
    ]
        
  return (
    <nav>
      <div className='nav-logo-container'>
        <img  src={Logo} alt=''/>
      </div>
    </nav>
  );
}

export default Navbar