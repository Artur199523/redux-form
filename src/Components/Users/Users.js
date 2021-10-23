import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UsersLoad} from "../../Redux/Actions/Users";

function Users() {

    let dispatch = useDispatch();
    let users = useSelector(state => state.users.users)
const [ k,setK]= useState(3)
    useEffect(() => {
            dispatch(UsersLoad())
        },[])
    return (
        <div>
            {
                users.map((elm,i)=>{
                    return(
                        <div key = {i}>
                            <div><img src={elm.picture.thumbnail}/></div>
                            <div>{elm.name.first + " " + elm.name.last}</div>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Users