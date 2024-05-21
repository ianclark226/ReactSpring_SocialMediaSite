import HomeIcon from "@mui/icons-material/Home"
import ExploreIcon from "@mui/icons-material/Explore"
import NotificationIcon from "@mui/icons-material/Notifications"
import MessageIcon from "@mui/icons-material/Message"
import GroupIcon from "@mui/icons-material/Group"
import VerifedIcon from "@mui/icons-material/Verified"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import PendingIcon from "@mui/icons-material/Pending"

export const navigationMenu = [
  {
    title: "Home",
    icon:<HomeIcon/>,
    path:"/home"
  },
  {
    title: "Explore",
    icon:<ExploreIcon/>,
    path:"/explore"
  },
  {
    title: "Notification",
    icon:<NotificationIcon/>,
    path:"/notification"
  },
  {
    title: "Messages",
    icon:<MessageIcon/>,
    path:"/messages"
  },
  {
    title: "Groups",
    icon:<GroupIcon/>,
    path:"/groups"
  },
  {
    title: "Profile",
    icon:<VerifedIcon/>,
    path:"/profile"
  },
  {
    title: "Account",
    icon:<AccountCircleIcon/>,
    path:"/account"
  },
  {
    title: "More",
    icon:<PendingIcon/>,
    path:"/more"
  }
]