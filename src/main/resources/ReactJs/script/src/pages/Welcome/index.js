import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import { connect } from "react-redux";
import specializareList from "../../commun/ReduxActions/SpecializariAction";
import { bindActionCreators } from "redux";
import Coverflow from "react-coverflow";

class Welcome extends Component {
  async componentWillMount() {
    await this.loadData();
  }

  render() {
    return (
      <div className="divContainerWelcomePage">
        <div className="hederWelcomePage">
          <Header
            isWelcomePage={this.props.authInfo.token == null ? true : false}
          />
        </div>
        <div className="divImagini">
          <Coverflow
            width={1000}
            height={400}
            displayQuantityOfSide={2}
            navigation={false}
            enableHeading={false}
          >
            <div
              role="menuitem"
              tabIndex="0"
            >
              <img
                src={require("../../assets/doc1.jpg")}
                alt="title or description"
                style={{ display: "block", width: "150%" }}
              />
            </div>
            <img
              src={require("../../assets/doc2.jpg")}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
            <img
              src={require("../../assets/doc3.jpg")}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
            <img
              src={require("../../assets/doc4.jpg")}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
            <img
              src={require("../../assets/doc5.png")}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
            <img
              src={require("../../assets/doc6.jpg")}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
           

          </Coverflow>
        </div>

        <div className="divWelcomePage" />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
