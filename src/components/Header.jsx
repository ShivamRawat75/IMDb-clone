import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';

import { logoURL } from '../constants/constant';
import MenuIcon from '@mui/icons-material/Menu';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import HeaderMenu from './HeaderMenu';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { routePath } from '../constants/route';



const StyledToolbar = styled(Toolbar)(`

    background: #121212;
    minHeight: 56px !important;
    padding: 0 115px !important;
    justify-content:space-between;
    & > * {
        padding:0 16px;
    }
    & >div {
        display:flex;
        align-item:center;
        cursor:pointer;
        & >p {
            font-size:14px;
            font-weight:600;

        }
    }
    & > p {
        font-size:14px;
        font-weight:600;

    }
    

`)

const InppputSearchField = styled(InputBase)`
    background:#ffffff;
    hight:30px;
    width:55%;
    border-radius:5px;
`

const Logo = styled('img')({
    width: 64
})



const Header = () => {

    const navigate=useNavigate();

    const [open, setOpen] = useState(null);

    const handleClick = (e) => {

        setOpen(e.currentTarget);

    }
    const handleClose=()=>{
        setOpen(null);
    }


    return (
        <AppBar position='static'>
            <StyledToolbar>
                <Logo src={logoURL} alt="logo" onClick={()=>navigate(routePath.home)} />
                <Box onClick={handleClick}>
                    <MenuIcon />
                    <Typography>Menu</Typography>
                </Box>

                <HeaderMenu open={open} handleClose={handleClose} />
                

                <InppputSearchField />

                <Typography>IMDb<Box component='span'>Pro</Box></Typography>
                <Box>
                    <BookmarkAddIcon />
                    <Typography>Watchlist</Typography>
                </Box>
                <Typography>Sing In</Typography>
                <Box>
                    <Typography>EN</Typography>
                    <ExpandMoreIcon />
                </Box>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header;