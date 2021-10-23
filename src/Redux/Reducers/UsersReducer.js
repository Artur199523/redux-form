import Users from "../States/Users";

function UsersReducer(state = Users, action) {
    let temp = {...state}
    switch (action.type) {
        case "saveUsers":
            temp.users = action.users
            break

    }
    return temp
}
export  default UsersReducer