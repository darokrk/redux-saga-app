import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

const AddTodo = () => (
  <Paper style={{ margin: 16, padding: 16 }}>
    <Grid container>
      <Grid xs={4} md={3} item style={{ paddingRight: 16 }}>
        <TextField placeholder="Name" fullWidth />
      </Grid>
      <Grid xs={4} md={3} item style={{ paddingRight: 16 }}>
        <TextField placeholder="Surname" fullWidth />
      </Grid>
      <Grid xs={2} md={1} item>
        <Button fullWidth color="secondary" variant="outlined">
          Add
        </Button>
      </Grid>
    </Grid>
  </Paper>
);

export default AddTodo;
