import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import { connect } from "react-redux";
import specializareList from "../../commun/ReduxActions/SpecializariAction";
import { bindActionCreators } from "redux";

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    await this.loadData();
  }

  render() {
    return (
      <div>
        <div>
          <Header
            isWelcomePage={this.props.authInfo.token == null ? true : false}
          />
        </div>
        <div className="div" />
      </div>
    );
  }

  async loadData() {
    await this.props.specializareList(this.props.authInfo.token);
  }
}
function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    specializareReducer: state.specializareReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { specializareList: token => specializareList(token) },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
