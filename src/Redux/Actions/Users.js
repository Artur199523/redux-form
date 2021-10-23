import axios from "axios";
export function saveUsers(users) {
    return{
        type:"saveUsers",users
    }
}
export function UsersLoad() {
    return (dispatch) => {
        axios.get("https://randomuser.me/api?results=20").then(r => {
            dispatch(saveUsers(r.data.results))
        })
    }
}