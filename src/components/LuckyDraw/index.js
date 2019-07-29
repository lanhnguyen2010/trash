import {connect} from "react-redux";
import {compose} from "redux";

import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";
import LuckyDraw from "./component"
import * as ROUTES from "../../constants/routes";


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
      const {history, isLoggedIn} = this.props;
      if (!isLoggedIn) {
        history.push(ROUTES.LOG_IN)
      }
    },
    componentDidMount() {

      const { getRandomGift } = this.props;

      const initState = {
        isLoading: false, onClickSpinner: () => {
          this.setState({
            isLoading: true, onClickSpinner: () => {
            }
          });

          setTimeout(function () {
            this.setState({isLoading: false});
            getRandomGift();

          }.bind(this), 3000)

        }
      };

      this.setState(initState);
    }
  })
)(LuckyDraw);

export default LuckyDrawContainer;