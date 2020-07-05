import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Avatar from "@material-ui/core/Avatar";
import Logo from "../headerLogo.png";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  text: {
    textAlign: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "bolder",
  },
  catg: {
    fontSize: 12,    
    color: "#c9c9c9",
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Avatar alt="Remy Sharp" src={Logo} className={classes.large} />
        <div className={classes.text}>
          <p className={classes.title}>Function Composition in Javascript</p>
          <p className={classes.catg}><BookmarkBorderIcon />By Admin in Uncategorised</p>
        </div>
      </div>
      <Divider />
    </>
  );
}
