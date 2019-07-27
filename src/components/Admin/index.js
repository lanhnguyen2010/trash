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
import {InputLabel, FilledInput, Select, TextField, MenuItem, Button} from "@material-ui/core";

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
      {...other}
    >
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

const AdminForm = ({history, updateGift}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  let onghutinoxRef = null;
  let onghutgaoRef = null;
  let tuivaiRef = null;
  let daoniaRef = null;
  let binhthuytinhRef = null;
  let dateRef = null;


  const [city, setCity] = React.useState({
    city: ''
  });

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value);
  };

  function handleTabChange(event, newValue) {
    setValue(newValue);
  }

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
          <InputLabel htmlFor="age-simple">Thanh Pho</InputLabel>
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
            type="date"
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
          <Button onClick={() => {
            updateGift(history, {
              city: city,
              onghutinox: onghutinoxRef.value,
              tuivai: tuivaiRef.value,
              daonia: daoniaRef.value,
              onghutgao: onghutgaoRef.value,
              binhthuytinh: binhthuytinhRef.value,
              date: dateRef.value
            });
          }}
                  style={styles.btnLogin}>Submit</Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </div>
  );
};

const Admin = withRouter(withStyles(styles)(AdminForm));

const AdminContainer = compose(
  connect(
    selectors.root,
    {
      updateGift: actions.updateGift
    }
  ),
  lifecycle({})
)(Admin);

export default AdminContainer;
