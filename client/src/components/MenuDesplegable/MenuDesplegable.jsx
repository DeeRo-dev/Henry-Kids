import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import style from './MenuDesplegable.module.css'
import {Link ,useParams} from 'react-router-dom';
/* const options = [
  'Borrar',
  'Editar',
  
]; */

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {

  const { id } = useParams();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(id)

  return (
    <div className={style.menu}>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            zIndex: 1000,
          },
        }}
      >
       {/*  {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))} */}
        <MenuItem id ={id}  onClick={handleClose}>
           <Link to={"home/modify"+ id}>
              Editar
           </Link>
          </MenuItem>
          <MenuItem   onClick={handleClose}>
            Borrar
          </MenuItem>
      </Menu>
    </div>
  );
}