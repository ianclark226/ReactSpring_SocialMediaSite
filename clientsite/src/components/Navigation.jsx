import React, { useNavigate } from 'react'
import { navigationMenu } from './NavbarMenu'
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const Navigation = () => {

    const navigate = useNavigate;
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleLogout = () => {
    console.log('logout')
    handleClose()
  }
  

  return (
    <div className='h-screen sticky top-0'>
        <div className='py-5'>
            <img src="" alt="" />
        
        <div className='space-y-6'>
            {navigationMenu.map((item) => <div className='cursor-pointer flex space-x-3 item-center' onClick={() => item.title==="Profile" ? navigate(`/profile/${5}`) : navigate(item.path)}>
                {item.icon}
                <p className='text-xl'>{item.title}</p>
                </div>)}
        </div>
        <div className='py-10'>
            <Button sx={{width:"100%", borderRadius: "29px", py:"15px", bgcolor: "#1E88E5"}} variant='contained'>
                Plop
            </Button>
        </div>
    </div>

    <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
            <Avatar alt="username" src=""/>
            <div>
                <span>Plop a Post</span>
                <span className='opacity-70'>@plopapost</span>
            </div>
            <MoreHorizIcon/>
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
        </div>
    </div>
    </div>
   
  )
}

export default Navigation