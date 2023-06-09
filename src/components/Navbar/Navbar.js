import './Navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <span className='logo'>CareCompanion+</span>
            </Link>
            <div className='search'>
                <input type='text' placeholder='Search...' />
                <SearchOutlinedIcon />
            </div>
            <div className='items'>
                <div className='item'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <LanguageOutlinedIcon className='icon' />
                    </Link>
                </div>
                <div className='item'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <DarkModeOutlinedIcon className='icon' />
                    </Link>
                </div>
                <div className='item'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <NotificationsNoneOutlinedIcon className='icon' />
                    </Link>
                    <div className='counter'>1</div>
                </div>
                {/* <div className='item'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <img
                            src='https://pngimg.com/uploads/man/small/man_PNG6509.png'
                            alt=''
                            className='avatar'
                        />
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar

// prev nav:

// import './Navbar.css'
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
// import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
// import MenuIcon from '@mui/icons-material/Menu'
// import { Link } from 'react-router-dom'

// const Navbar = ({ handleSidebarCollapse, handleDarkMode }) => {

//     return (
//         <div className='navbar'>
//             <div className='logo-container'>
//                 <Link to='/'>
//                     <span className='logo'>CareCompanion</span>
//                 </Link>
//             </div>
//             <div className='nav-wrapper'>
//                 <div className='nav-items'>
//                     <div className='nav-item'>
//                         <MenuIcon
//                             className='nav-icon'
//                             onClick={handleSidebarCollapse}
//                         />
//                     </div>
//                     <div className='nav-search'>
//                         <input type='text' placeholder='Search...' />
//                         <SearchOutlinedIcon />
//                     </div>
//                 </div>
//                 <div className='nav-items'>
//                     <div className='nav-item'>
//                         <DarkModeOutlinedIcon
//                             className='nav-icon'
//                             onClick={handleDarkMode}
//                         />
//                     </div>
//                     <div className='nav-item'>
//                         <NotificationsNoneOutlinedIcon className='nav-icon' />
//                         <div className='notification-counter'>1</div>
//                     </div>
//                     <div className='nav-item'>
//                         <img
//                             src='https://image.shutterstock.com/image-photo/heavy-industry-engineering-factory-interior-260nw-1870491376.jpg'
//                             alt=''
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar
