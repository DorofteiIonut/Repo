import getMediciConst from"../Constants";
import Api from "../../Api/Api";

export default function mediciAction(token,spec){
    return async function(dispach){
        dispach({type:getMediciConst.GET_MEDICI_IN_PROGRESS});
        try {
            const resp = await fetch(Api.getMediciBySpecializareUrl+"/dentist", {
                method: "GET",
                headers: {
                    "Authorization":"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJCaWFuY2EiLCJleHAiOjE1MjI1MjExNzV9.WRsHPkVQj5ks6tfJWasyv3rNrCq362dD8cLVgIkVMEFxp-QCxOtN3t-orItW7rvpKnAa-Oon7_Hb6y0xCUwFag",
                    "Content-Type": "application/json"
                },
              });
        const json=await resp.json();
        if(json==null || resp.status!==200){
            throw new Error(json);
        }
        dispach({type:getMediciConst.GET_MEDICI_SUCCESS,payload:json});
        } catch (error) {
            dispach({type:getMediciConst.GET_MEDICI_FAILURE,payload:error});
        }
    }
}