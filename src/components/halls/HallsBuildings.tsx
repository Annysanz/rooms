import { makeStyles, MenuItem, TextField } from '@material-ui/core';

const HallsBuildings = () => {
  const classes = useStyles();
  
  <div>
    <h1 className={classes.divTitle}>Salas</h1>
    <TextField id="select" label="Age" value="20" select>
      <MenuItem value="10">Planta 1</MenuItem>
      <MenuItem value="20">Planta 2</MenuItem>
    </TextField>
  </div>
}

const useStyles = makeStyles((theme: any) => ({
  divTitle: {
    backgroundColor: "#F2F2F5",
    textAlign: "start",
    lineHeight: "19px",
    color: "#000000",
    fontSize: "14px",
  }
}));

export default HallsBuildings;

