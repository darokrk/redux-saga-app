import React from "react";
import { List, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: "auto",
    width: 900,
    marginTop: 20
  },
  title: {
    color: "white",
    textAlign: "center",
    margin: 20
  }
}));

const TodoList = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" className={classes.title}>
        Todo List
      </Typography>
      <Paper className={classes.wrapper}>
        <List></List>
      </Paper>
    </>
  );
};

export default TodoList;
