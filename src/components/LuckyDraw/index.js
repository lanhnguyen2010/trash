import {connect} from "react-redux";
import {compose} from "redux";

import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";
import LuckyDraw from "./component"


const LuckyDrawContainer = compose(
  connect(
    selectors.root,
    {
      getRandomGift: actions.getRandomGift
    },
  ),
  lifecycle({

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