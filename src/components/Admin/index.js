import {connect} from "react-redux";
import {compose} from "redux";
import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";
import React from 'react';
import {withStyles} from '@material-ui/styles';

import {
  withRouter
} from 'react-router-dom'

import {
  TextField,
  Button
} from '@material-ui/core';
import {FilledInput, InputLabel, MenuItem, Select} from "@material-ui/core/es/index";


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

const AdminForm = ({history, updateGift}) => {
  let onghutinoxRef = null;
  let onghutgaoRef = null;
  let tuivaiRef = null;
  let daoniaRef = null;
  let binhthuytinhRef = null;
  let dateRef = null;


  const [city, setCity] = React.useState({
    city:''
  });
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value);
  };

  return (
    <div style={styles.container}>
      <InputLabel htmlFor="age-simple">Thanh Pho</InputLabel>
      <Select
        value={city}
        onChange={handleChange}
        input={<FilledInput name="city" id="filled-city-simple" />}
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
          city:city,
          onghutinox: onghutinoxRef.value,
          tuivai: tuivaiRef.value,
          daonia: daoniaRef.value,
          onghutgao: onghutgaoRef.value,
          binhthuytinh: binhthuytinhRef.value,
          date:dateRef.value
        });
      }}
      style={styles.btnLogin}>Submit</Button>
    </div>)
};

const Admin =withRouter(withStyles(styles)(AdminForm));

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
