import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material';

import { logoURL } from './constants/constant';
import MenuIcon from '@mui/icons-material/Menu';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const StyledToolbar = styled(Toolbar)(`

    background: #121212;
    minHeight: 56px !important;
    padding: 0 115px !important;
    justify-content:space-between;
    & >div {
        display:flex;
        align-item:center;
        cursor:pointer;
        & >p {
            font-size:14px;
            font-weight:600;

        }
    }
    & >p {
        font-size:14px;
        font-weight:600;

    }
    

`)

const Logo = styled('img')({
    width: 64
})

const Header = () => {
    return (
        <AppBar>
            <StyledToolbar>
                <Logo src={logoURL} alt="logo" />
                <Box>
                    <MenuIcon />
                    <Typography>Menu</Typography>
                </Box>
                <InputBase />
                <Typography>IMDb<Box component='span'>Pro</Box></Typography>
                <Box>
                    <BookmarkAddIcon />
                    <Typography>Watchlist</Typography>
                </Box>
                <Typography>Sing In</Typography>
                <Box>
                    <Typography>EN</Typography>
                    <ExpandMoreIcon/>
                </Box>
            </StyledToolbar>
        </AppBar>
    )
}

export default Header;