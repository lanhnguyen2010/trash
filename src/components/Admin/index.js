import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {connect} from "react-redux";
import {compose} from "redux";
import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";
import {withStyles} from '@material-ui/styles';

import {
  withRouter
} from 'react-router-dom'
import {
  InputLabel,
  FilledInput,
  Select,
  TextField,
  MenuItem,
  Button,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody
} from "@material-ui/core";

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50
  },

  textField: {
    marginTop: 20,
    minWidth: 300
  },

  btnLogin: {
    marginTop: 30
  }
};

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return {name, calories, fat, carbs, protein};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const AdminForm = ({history, updateGift, getGifts, boothsData}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  let onghutinoxRef = null;
  let onghutgaoRef = null;
  let tuivaiRef = null;
  let daoniaRef = null;
  let binhthuytinhRef = null;
  let dateRef = null;
  const [city, setCity] = React.useState('Ho Chi Minh');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value);
  };

  const today = new Date();

  let formattedDate=today.getDate() + "-" + today.getMonth() +"-"+ today.getFullYear();

  const handleCityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value);
    getGifts(event.target.value);
  };

  function handleTabChange(event, newValue) {
    setValue(newValue);
    if (newValue === 1){
      getGifts(city);
    }
  }

  console.log(boothsData);
  console.log(today);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleTabChange} aria-label="simple tabs example">
          <Tab label="Update" {...a11yProps(0)} />
          <Tab label="Report" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div style={styles.container}>
          <InputLabel htmlFor="age-simple">Thành Phố</InputLabel>
          <Select
            value={city}
            onChange={handleChange}
            input={<FilledInput name="city" id="filled-city-simple"/>}
          >
            <MenuItem value={"Ha Noi"}>Hà Nội</MenuItem>
            <MenuItem value={"Ho Chi Minh"}>Hồ Chí Minh</MenuItem>
            <MenuItem value={"Da Nang"}>Đà Nẵng</MenuItem>
          </Select>
          <TextField
            style={styles.textField}
            required={true}
            label="Ngày"
            id="date"
            type="label"
            defaultValue={formattedDate}
            disabled
            inputRef={input => dateRef = input}
          />
          <TextField
            style={styles.textField}
            required={true}
            label="Ống Hút Inox"
            id="onghutinox"
            type="number"
            inputRef={input => onghutinoxRef = input}
          />
          <TextField
            style={styles.textField}
            required={true}
            label="Túi Vải"
            id="tuivai"
            type="number"
            inputRef={input => tuivaiRef = input}
          />
          <TextField
            style={styles.textField}
            required={true}
            label="Dao Nĩa, Muỗng Gỗ"
            id="daonia"
            type="number"
            inputRef={input => daoniaRef = input}
          />
          <TextField
            style={styles.textField}
            required={true}
            label="Ống Hút Gạo"
            id="onghutgao"
            type="number"
            inputRef={input => onghutgaoRef = input}
          />
          <TextField
            style={styles.textField}
            required={true}
            label="Bình Thủy Tinh"
            id="binhthuytinh"
            type="number"
            inputRef={input => binhthuytinhRef = input}
          />
          <Button style={styles.btnLogin} onClick={() => {
            updateGift(history, {
              city: city,
              onghutinox: onghutinoxRef.value,
              tuivai: tuivaiRef.value,
              daonia: daoniaRef.value,
              onghutgao: onghutgaoRef.value,
              binhthuytinh: binhthuytinhRef.value,
              date: dateRef.value
            });
          }}>Submit</Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InputLabel htmlFor="age-simple">Thành Phố</InputLabel>
        <Select
          value={city}
          onChange={handleCityChange}
          input={<FilledInput name="city" id="filled-city-simple"/>}
        >
          <MenuItem value={"Ha Noi"}>Hà Nội</MenuItem>
          <MenuItem value={"Ho Chi Minh"}>Hồ Chí Minh</MenuItem>
          <MenuItem value={"Da Nang"}>Đà Nẵng</MenuItem>
        </Select>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="right">Ngày</TableCell>
              <TableCell align="right">Ống Hút Inox&nbsp;(cái)</TableCell>
              <TableCell align="right">Túi Vải&nbsp;(cái)</TableCell>
              <TableCell align="right">Bộ Dao, Nĩa Gỗ&nbsp;(cái)</TableCell>
              <TableCell align="right">Ống Hút Gạo&nbsp;(cái)</TableCell>
              <TableCell align="right">Bình Thủy Tinh&nbsp;(cái)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {boothsData &&
            (boothsData.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.onghutinox}</TableCell>
                <TableCell align="right">{row.tuivai}</TableCell>
                <TableCell align="right">{row.daonia}</TableCell>
                <TableCell align="right">{row.onghutgao}</TableCell>
                <TableCell align="right">{row.binhthuytinh}</TableCell>
              </TableRow>
            )))}
          </TableBody>
        </Table>
      </TabPanel>
    </div>
  );
};

const Admin = withRouter(withStyles(styles)(AdminForm));

const AdminContainer = compose(
  connect(
    selectors.root,
    {
      updateGift: actions.updateGift,
      getGifts: actions.getGifts
    }
  ),
  lifecycle({})
)(Admin);

export default AdminContainer;
