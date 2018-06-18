import appConstants from "../Constants";

export default function setStatus(token,username) {
  return async function(dispatch) {
    try {
        console.log(token+" si "+username)
      const url =
        "http://localhost:8080/" + username + "/checkRole";
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      });
      console.log(resp.status)
      if (resp.status !== 200) {
        throw new Error("isMedic");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: appConstants.SET_STATUS });
    }
  };
}
