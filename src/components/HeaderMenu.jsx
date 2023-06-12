
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const HeaderMenu=({open,handleClose})=>{

    const openMenu=Boolean(open);

    return(
        <Menu
        id="basic-menu"
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Popular</MenuItem>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
      </Menu>
    )
}

export default HeaderMenu;