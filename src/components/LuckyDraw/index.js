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
      const {history, isLoggedIn, selectedGift} = this.props;
      if (!isLoggedIn) {
        history.push(ROUTES.LOG_IN)
      }
    },
    componentDidMount() {

      const { getRandomGift, history } = this.props;

      getRandomGift();

      const initState = {
        isLoading: false, onClickSpinner: () => {
          this.setState({
            ...this.props.state,isLoading: true
          });

          setTimeout(function () {
            history.push(ROUTES.GIFT_RESULT)
          }.bind(this), 7000)

        }
      };

      this.setState(initState);
    }
  })
)(LuckyDraw);

export default LuckyDrawContainer;