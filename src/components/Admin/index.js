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
import MaterialTable from 'material-table'
import * as CONST from '../../constants/Const'

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
  TableBody,
  InputAdornment
} from "@material-ui/core";
import * as ROUTES from "../../constants/routes";

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
    marginTop: 30,
    color:'white',
    backgroundColor: '#5b9344'
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

const AdminForm = ({history, updateGift, getGifts, boothsData, checkSmsAccountBalance, smsBalance, getAllOtps, otpList,
                     city, updateOtpList, getAllPlayers, players, getAllQuizResults, quizResults, getAllGiftResults, giftResults,
                     updateIsLoggedIn}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  let onghutinoxRef = null;
  let tuivaiRef = null;
  let lysuRef = null;
  let binhthuytinhRef = null;
  let dateRef = null;
  let searchPhoneNumberRef = null;
  const [citySelector, setCity] = React.useState(city);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value);
  };

  const today = new Date();

  let formattedDate=today.getDate() + "-" + (today.getMonth() + 1) +"-"+ today.getFullYear();

  const handleCityChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value);
    getGifts(event.target.value);
  };

  function handleTabChange(event, newValue) {
    setValue(newValue);
    if (newValue === 1){
      getGifts(citySelector);
    }

    if (newValue === 2){
      checkSmsAccountBalance();
    }

    if (newValue === 4){
      updateOtpList([]);
    }

    if (newValue === 3){
      getAllPlayers([]);
    }
    if (newValue === 5){
      getAllQuizResults();
    }
    if (newValue === 6){
      getAllGiftResults();
    }
    if (newValue === 6){
      updateIsLoggedIn(false);
      history.push(ROUTES.LOG_IN);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleTabChange} aria-label="simple tabs example">
          <Tab label="Gifts" {...a11yProps(0)} />
          <Tab label="Report" {...a11yProps(1)} />
          <Tab label="SMS" {...a11yProps(2)} />
          <Tab label="Players(All)" {...a11yProps(3)} />
          <Tab label="OTP" {...a11yProps(4)} />
          <Tab label="Quiz Results" {...a11yProps(5)} />
          <Tab label="Log Out" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div style={styles.container}>
          <InputLabel htmlFor="age-simple">Thành Phố</InputLabel>
          <Select
            value={citySelector}
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
            label="Ly sứ"
            id="lysu"
            type="number"
            inputRef={input => lysuRef = input}
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
              city: citySelector,
              onghutinox: onghutinoxRef.value,
              tuivai: tuivaiRef.value,
              lysu: lysuRef.value,
              binhthuytinh: binhthuytinhRef.value,
              date: dateRef.value
            });

          }}>Submit</Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InputLabel htmlFor="age-simple">Thành Phố</InputLabel>
        <Select
          value={citySelector}
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
              <TableCell align="right">Ly sứ&nbsp;(cái)</TableCell>
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
                <TableCell align="right">{row.lysu}</TableCell>
                <TableCell align="right">{row.binhthuytinh}</TableCell>
              </TableRow>
            )))}
          </TableBody>
        </Table>
      </TabPanel>
      <TabPanel index={2} value={value}>
        <div style={styles.container}>
        <Button style={styles.btnLogin} onClick={() => {
          checkSmsAccountBalance(history);
        }}>Kiểm Tra Số Dư</Button>

        <TextField
          style={styles.textField}
          label="Số Dư Tài Khoản eSMS"
          id="balance"
          type="label"
          value={smsBalance}
          disabled
          InputProps={{
            endAdornment: <InputAdornment position="start">VND</InputAdornment>,
          }}
        />
        </div>
      </TabPanel>

      <TabPanel index={3} value={value}>
        <Button onClick={()=> getAllPlayers()}><u>Làm mới</u></Button>
        {players &&
        <MaterialTable
          title="Người chơi"
          columns={[
            { title: 'Ngày', field: 'timeOnly'},
            { title: 'Giờ', field: 'dateOnly'},
            { title: 'Tên', field: 'name' },
            { title: 'Giới Tính', field: 'gender' },
            { title: 'Ngày Sinh', field: 'birthDay'},
            { title: 'Số Điện Thoại', field: 'phoneNumber'},
            { title: 'Email', field: 'email'},
            { title: 'OTP', field: 'otp'},
            { title: 'Hoạt Động', field: 'giftTypeLabel'},
            { title: CONST.GiftResource.onghutinox.label, field: CONST.ONG_HUT_INOX},
            { title: CONST.GiftResource.lysu.label, field: CONST.LY_SU},
            { title: CONST.GiftResource.binhthuytinh.label, field: CONST.BINH_THUY_TINH},
            { title: CONST.GiftResource.tuivai.label, field: CONST.TUI_VAI}
          ]}
          data={players}
          options={{
            exportButton: true,
            sorting: true,
            exportAllData: true
          }}
        />}
    </TabPanel>
      <TabPanel index={4} value={value}>
        <div style={styles.container}>
        <TextField
          style={styles.textField}
          placeholder="Số Điện Thoại"
          variant="outlined"
          id="phoneNumber"
          inputRef={input => searchPhoneNumberRef = input}
        />
        <Button onClick={() => {
          getAllOtps(searchPhoneNumberRef.value);
        }}
                style={styles.btnLogin}>Tìm Kiếm</Button>
        </div>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="right">Số Điện Thoại</TableCell>
              <TableCell align="right">OTP</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {otpList &&
            (otpList.map((row, index) => (
              <TableRow key={index}>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                <TableCell align="right">{row.otp}</TableCell>
              </TableRow>
            )))}
          </TableBody>
        </Table>
      </TabPanel>
      <TabPanel index={5} value={value}>
        <Button onClick={()=> getAllQuizResults()}><u>Làm mới</u></Button>
        {quizResults?
        <MaterialTable
          title="Người chơi"
          columns={[
            { title: 'Loại Rác', field: 'label' },
            { title: 'Đáp Án 1', field: 'answer1' },
            { title: 'Đáp Án 2', field: 'answer2' },
            { title: 'Đáp Án 3', field: 'answer3' },
            { title: 'Lựa Chọn', field: 'result'},
          ]}
          data={quizResults}
          options={{
            exportButton: true
          }}
        /> :''}
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
      getGifts: actions.getGifts,
      checkSmsAccountBalance: actions.checkSmsAccountBalance,
      getAllOtps:actions.getAllOtps,
      updateOtpList: actions.updateOtpList,
      getAllPlayers: actions.getAllPlayers,
      getAllQuizResults: actions.getAllQuizResults,
      getAllGiftResults: actions.getAllGiftResults,
      updateIsLoggedIn: actions.updateIsLoggedIn

    }
  ),
  lifecycle({
    componentWillMount() {
      const {history, isLoggedIn} = this.props;
      if (!isLoggedIn) {
        history.push(ROUTES.LOG_IN)
      }
    },
  })
)(Admin);

export default AdminContainer;
