import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {Link} from "react-router-dom";
import setSpecializare from "../../commun/ReduxActions/SetSpecializareAction";
import {bindActionCreators} from 'redux'; 

class Dropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="headerDiv">{this.dropDown()}</div>;
  }

 async onClick(specializare) {
    await this.props.setSpecializare(specializare);
    console.log("onclick--"+JSON.stringify(this.props.specializareRedux));
    if(this.props.specializareRedux.specializareSelectata!==null){
      this.props.history.push('/medici');
    }
  }

  dropDown() {
    let listaSpec = [];
    let nrSpec = this.props.specializareRedux.specializareList.length;
    for (let i = 0; i < nrSpec; i++) {
      listaSpec.push(
        <div>
              <p onClick={()=>this.onClick(this.props.specializareRedux.specializareList[i].denumireSpecializare)}>{this.props.specializareRedux.specializareList[i].denumireSpecializare}</p>
        </div>
      );
    }
    return listaSpec;
  }
}
function mapStateToProps(state) {
  return {
    specializareRedux: state.specializareReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSpecializare:(specializare)=>setSpecializare(specializare)},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Dropdown));
