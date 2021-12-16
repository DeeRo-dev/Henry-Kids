import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Help from "../Help/Help.jsx";
import HelpIcon from "@material-ui/icons/Help";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
// import HelpIcon from "@material-ui/icons/Help";
import {Typography,  Box } from "@material-ui/core"
import Home from "../Home/home.jsx";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import FavsContainer from "../FavsContainer/FavsContainer.jsx";
import styles from "./ProfileTeacher.module.css";
import ModifyTeacher from "../ModifyTeacher/ModifyTeacher";

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



export default function ProfileStudent() {
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
  }));
  
  const classes = useStyles();
  // const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
      <Link to="/home/teacher">
            <div className={styles.volver}>
            <ArrowBackIosIcon color="primary"/>
            </div>
          </Link>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {/* <Tab label="Ayuda" icon={<HelpIcon />} {...a11yProps(0)} /> */}
          <Tab
            label="Editar Perfil"
            icon={<PersonPinIcon />}
            {...a11yProps(0)}
          />
           <Tab label="Ayuda" icon={<HelpIcon />} {...a11yProps(1)} />
         {/*  <Tab label="Volver" icon={<PersonPinIcon />} {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}></TabPanel> */}
      <TabPanel value={value} index={0}>
        {" "}
        <ModifyTeacher />
      </TabPanel>
      <TabPanel value={value} index={1}> <Help/>
    </TabPanel>
      {/* <TabPanel value={value} index={3}></TabPanel> */}
    </div>
  );
}
