import React from 'react';

const base = {
  textInput: {
    color: 'white',
    textAlign: 'center',
  }
};
const fonts = {
  regular: "FSAlbertPro",
  bold: "FSAlbertProBold",
  extraBold: "FSAlbertProExtraBold"
};

const colors = {
  pruRed: "#ed2224",
  pruGrey: "#2B2B2B"
}

const commonStyle = {
  container : {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    minHeight: '100%',
    textAlign: 'center'
  },
  topText: {
    fontSize: 33,
    width: '70%',
    paddingTop: 70,
    textAlign: 'center',
    marginBottom:40,
    margin: "auto"
  },
  button: {
    alignSelf: "center",
    backgroundColor: colors.pruRed,
    fontSize: '3vh',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 100,
    color: 'white',
    minWidth: 200,
    minHeight: 50,
    marginTop: '5vh',
    textTransform: "none",
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
    fontFamily: fonts.bold
  },
  footer: {
    position: "fixed",
    bottom: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  bottomButton: {
    marginBottom: '5%',
    alignSelf: "center",
    backgroundColor: colors.pruRed,
    fontSize: '3vh',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 100,
    color: 'white',
    minWidth: 200,
    minHeight: 50,
    marginTop: 30,
    textTransform: "none",
    borderWidth: 1,
    borderColor: 'white',
    borderStyle: 'solid',
    width: '70%',
    fontFamily: fonts.bold
  },
  textStyleBig_bold: {
    ...base.textInput,
    fontSize: '5vh',
    fontFamily: fonts.bold
  },
  textNormal_bold: {
    ...base.textInput,
    fontSize: '2vh',
    fontFamily: fonts.bold
  },
};



export default commonStyle;

export {fonts, colors}