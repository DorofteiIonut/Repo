import getProfilCabinet from "../Constants";

export const initialState={
    inProgress: false,
    error:null,
    dateCabinet:null,
};

export default function profilCabinet(state = initialState, action){
    switch(action.type){
        case getProfilCabinet.GET_PROFILCABINET_IN_PROGRESS:
        {
        state={
            ...state,
            inProgress:true,
            error:null,
            dateCabinet:null,
        };
        break;
    }
        case getProfilCabinet.GET_PRIFILCABINET_SUCCESS:
        {
            state={
                ...state,
                inProgress:false,
                dateCabinet:action.payload
            };
            break;
        }
        case getProfilCabinet.GET_PROFILCABINET_FAILURE:
        {
            state={
                ...state,
                inProgress:null,
                error:action.payload
            };
            break;
        }
}
return state;
}