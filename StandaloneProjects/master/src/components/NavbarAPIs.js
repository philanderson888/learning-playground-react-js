import React from 'react'
import { Link } from 'react-router-dom'
class NavbarAPIs extends React.Component {
    render(){
        return(
            <div>
                <h1>React APIs</h1>
                <Link to="/">Home</Link>&nbsp;|&nbsp;
                <Link to="/api-get">API Get</Link>&nbsp;|&nbsp;
                <Link to="/api-post">API Post</Link>&nbsp;|&nbsp;
                <Link to="/api-put">API Put</Link>&nbsp;|&nbsp;
                <Link to="/api-delete">API Delete</Link>&nbsp;|&nbsp;
                <Link to="/api-delete-2">API Delete 2</Link>&nbsp;|&nbsp;
                <Link to="/api-google-calendar">API Google Calendar</Link>&nbsp;|&nbsp;
                <Link to="/jwt">JWT</Link>
            </div>
        )
    }
}
export default NavbarAPIs