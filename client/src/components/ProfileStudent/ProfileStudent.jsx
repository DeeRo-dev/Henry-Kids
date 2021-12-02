import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { editUser } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import FavsContainer from "../FavsContainer/FavsContainer.jsx";
import styles from "./ProfileStudent.module.css";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function ProfileStudent() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const [modalIngresar, setModalIngresar] = useState(false);

  const toggleModalIngresar = (e) => {
    e.preventDefault()
    setModalIngresar(!modalIngresar);
  };

  const [user, setUser] = useState({
    userName: "",
    photo:""
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    // /* dispatch(editUser(data)); 
    setUser({
      userName: "", 
      photo: "" 
    });
  }

    
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Favoritos" icon={<FavoriteIcon />} {...a11yProps(1)} />
          <Tab
            label="Editar Perfil"
            icon={<PersonPinIcon />}
            {...a11yProps(2)}
          />
          <Tab label="Ayuda" icon={<HelpIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={1}>
        <form>
          <button> Cambiar username</button>
          <button onClick={(e) => toggleModalIngresar(e)}> Cambiar foto</button>
          
          {modalIngresar && (
            <div className={styles.modal}>
              <div
                onClick={toggleModalIngresar}
                className={styles.overlay}
              ></div>
              <div className={styles.modal_content_Ingresar}>
                <button
                  className={styles.close_modal}
                  onClick={toggleModalIngresar}
                >
                  x
                </button>
                
                <div className={styles.containerImgPerfil}>
             <div className={styles.imagen}>
            <img
              src="https://i.imgur.com/S7meZ49.png"
              alt="404"
              className={styles.img} 
            />{" "}
          </div>
          <div className={styles.imagen}>
            <img
              src="https://i.imgur.com/iWMCoOA.png"
              alt="404"
              className={styles.img} 
            />{" "}
          </div>
          </div>
              </div>
            </div>
          )}
          {/* <input name="firstName" type="text" placeholder="Nombre de usuario:" />
          <input name="firstName" type="text" placeholder="Contraseña nueva:" />
          <input name="firstName" type="text" placeholder="Contraseña actual:" /> */}
        </form>
      </TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={3}></TabPanel>
    </div>
  );
}
