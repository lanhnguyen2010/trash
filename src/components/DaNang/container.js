import {connect} from "react-redux";
import {compose} from "redux";

import DaNang from "./component";
import {selectors, actions} from "../../redux";
import {lifecycle} from "recompose";

const DaNangContainer = compose(
  connect(
    selectors.root,
    {
      loadData: actions.loadData,
      updateData: actions.updateData
    }
  ),
  lifecycle({
    componentWillMount() {
      const { loadData } = this.props;
      console.log(this.props);
      loadData();

    },
    componentDidMount() {
      const { loadData } = this.props;
      loadData();
      console.log("componentWillNount");
    }
  })
)(DaNang);

export default DaNangContainer;