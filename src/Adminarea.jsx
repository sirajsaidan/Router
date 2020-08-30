import React from 'react';
import {withRouter} from 'react-router-dom'
const Adminarea =(props)=>{
    return(
        <div>
            <p>You must log in to view the page at /admin</p>
            <button onClick={e=>props.history.push('/admin')}>Login</button>
        </div>
    )
}
export default Adminarea