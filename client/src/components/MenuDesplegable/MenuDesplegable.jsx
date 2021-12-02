import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import style from './MenuDesplegable.module.css'
import {Link } from 'react-router-dom';
import { DeleteClass } from '../../actions';
import { useDispatch } from 'react-redux';

/* const options = [
  'Borrar',
  'Editar',
  
]; */





export default function LongMenu(props) {

  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  function onSubmit(e , props){
    e.preventDefault();
    alert("clase eliminada")
    dispatch(DeleteClass(props.id))
  }


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
        <MenuItem id ={props.id}  onClick={handleClose}>
           <Link to={"/home/modify/"+ props.id}>
              Editar
           </Link>
          </MenuItem>
          <MenuItem   onClick={(e)=> onSubmit(e)}>
             Borrar    
          </MenuItem>
      </Menu>
    </div>
  );
}