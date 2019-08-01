import {connect} from "react-redux";
import {compose} from "redux";

import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";
import LuckyDraw from "./component"
import * as ROUTES from "../../constants/routes";
import * as Const from "../../constants/Const";
import {selectedGift} from "../../redux/selectors";


const LuckyDrawContainer = compose(
  connect(
    selectors.root,
    {
      getRandomGift: actions.getRandomGift,
      endFlow: actions.endFlow
    },
  ),
  lifecycle({
    componentWillMount() {
      const {history, isLoggedIn, selectedGift, getRandomGift} = this.props;
      if (!isLoggedIn) {
        history.push(ROUTES.LOG_IN)
      } else {
        getRandomGift();
      }
    },
    componentDidMount() {

      const { history, selectedGift } = this.props;

      const initState = {
        isLoading: false, onClickSpinner: () => {
          console.log("click", selectedGift);
          if (!selectedGift) {
            window.alert("Hết quà!");
            return;
          }
          this.setState({
            ...this.props.state,isLoading: true
          });

          setTimeout(function () {

            if (selectedGift) history.push(ROUTES.GIFT_RESULT)
          }.bind(this), 7000)

        }
      };

      this.setState(initState);
    }
  })
)(LuckyDraw);

export default LuckyDrawContainer;