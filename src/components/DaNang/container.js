import {connect} from "react-redux";
import {compose} from "redux";

import DaNang from "./component";
import {selectors, actions} from "./redux";
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
      const {loadData, updateData} = this.props;
      console.log("componentWillNount");
      loadData();

    },
    componentDidMount() {
      const {loadData, updateData} = this.props;
      loadData();
      console.log("componentWillNount");
    }
  })
)(DaNang);

export default DaNangContainer;