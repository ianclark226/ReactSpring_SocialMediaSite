import React, {useNavigate} from 'react'
import RepeatIcon from '@mui/icons-material/Repeat'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutline'
import FileUpload from '@mui/icons-material/FileUpload'
import BarChart from '@mui/icons-material/BarChart'
import FavIcon from '@mui/icons-material/Favorite'
import FavOutline from '@mui/icons-material/FavoriteOutlined'


const PlopCard = () => {

    const navigate = useNavigate;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
      setAnchorEl(null);
    }
    const handleDeletePlop = () => {
      console.log('delete plop')
      handleClose()
    }

    const handleOpenReplyModel=() => {
        console.log("open model")
    }

    const handleCreateReplop=() => {
        console.log("replop")
    }

    const handleLikePlop=() => {
        console.log("like plop")
    }

  return (
    <div className=''>
        <div className='flex items-center font-semibold text-gray-700 py-2'>
            <RepeatIcon />
            <p>You Replop</p>
        </div>
        <div className='flex space-x-5'>
            <Avatar onClick={() => navigate(`/profile/${6}`)} className='cursor-pointer' alt='username' src=''/>
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <div className='flex cursor-pointer items-center space-x-2'>
                        <span className='font-semibold'>Plop a Post</span>
                        <span className='text-gray-600'>@plopapost . 2m</span>
                        <img className='ml-2 w-5 h-5' src='' alt=''/>
                    </div>
                    <div>
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
        <MenuItem onClick={handleDeletePlop}>Delete</MenuItem>
        <MenuItem onClick={handleDeletePlop}>Edit</MenuItem>
        
      </Menu>
                    </div>
                    <div className='mt-2'>
                        <div className='cursor-pointer'>
                            <p className="mb-2 p-0">Nice Site</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src='' alt=''/>
                        </div>
                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div classNmae="space-x-3 flex items-center text-gray-600">
                                <ChatBubbleIcon className='cursor-pointer' onClick={handleOpenReplyModel}/>
                                <p>43</p>
                            </div>
                            <div className={`${true ? "text-pink-600" : "text-gray-600" } space-x-3 flex items-center`}>
                                <RepeatIcon className="cursor-pointer" onClick={handleCreateReplop}/>
                                <p>54</p>
                            </div>
                            <div className={`${true ? "text-pink-600" : "text-gray-600" } space-x-3 flex items-center`}>
                                {true ? <FavIcon className="cursor-pointer" onClick={handleLikePlop}/> : <FavOutline onClick={handleLikePlop} className='cursor-pointer' />}
                                <p>54</p>
                            </div>
                            <div classNmae="space-x-3 flex items-center text-gray-600">
                                <BarChart className='cursor-pointer' onClick={handleOpenReplyModel}/>
                                <p>430</p>
                            </div>
                            <div classNmae="space-x-3 flex items-center text-gray-600">
                                <FileUpload className='cursor-pointer' onClick={handleOpenReplyModel}/>
                                
                                
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default PlopCard