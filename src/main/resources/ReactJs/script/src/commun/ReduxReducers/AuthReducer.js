import loginConstants from "../Constants"; 

export const initialState = {
   inProgress:false,
   token:null,
   error:null,
   username:null,
};
 
export default function loginReducer(state = initialState, action) {
    switch(action.type){
        case loginConstants.LOGIN_IN_PROGRESS:{ 
            state={
                ...state,
                inProgress:true,
                token:null,
                error:null,
            };
            break;
        }
        case loginConstants.LOGIN_SUCCES:{
            state={
                ...state,
                inProgress:false,
                token:action.payload,
            };
            break;
           } 
           case loginConstants.LOGIN_FAILURE:{
            state={
                ...state,
                inProgress:false,
               error:action.payload,
            };
            break;
           }
           case loginConstants.ADD_USERNAME:{
               state={
                   ...state,
                   username:action.payload,
               };
               break;
           }
    }
    return state;
}