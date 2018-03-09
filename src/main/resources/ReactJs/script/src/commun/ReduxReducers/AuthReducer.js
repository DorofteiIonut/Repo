import loginConstants from "../Constants"; 

const initialState = {
   inProgress:false,
   token=null,
   username=null,
   error=null
};
 
 
export function loginReducer(state = initialState, action) {
    switch(action.type){
        case loginConstants.LOGIN_IN_PROGRESS:{
            inProgress:true;
            break;
        }
        case loginConstants.LOGIN_SUCCES:{
            token:action.payload.token;
            username:action.payload.username;
            inProgress:false;
            break;
           } 
           case loginConstants.LOGIN_FAILURE:{
            token:null;
            username:null;
            inProgress:false;
            error:action.payload;
            break;
           }
           default: break;
    }

}