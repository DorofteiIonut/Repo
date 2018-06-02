import getProgramariConst from "../Constants";
import Api from "../../Api/Api";

export default function programariAction(token){
    return async function(dispach){
        dispach({type:getProgramariConst.GET_PROGRAMARI_IN_PROGRESS});
        try{
            const resp= await fetch(Api.getProgramariUrl,{
                method:"GET",
                headers: {
                    "Authorization":token,
                    "Content-Type": "application/json"
                },
            });
            const json=await resp.json();
            if(json==null || resp.status!==200){
                throw new Error(json);
                
        }
        dispach({type:getProgramariConst.GET_PROGRAMARI_SUCCESS, payload:json});
    }catch(error){
        dispach({type:getProgramariConst.GET_PROGRAMARI_FAILURE, payload:error});
    }
    
}
}