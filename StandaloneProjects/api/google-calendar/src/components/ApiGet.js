import React from 'react'
import Navbar from './Navbar'
class APIGet extends React.Component {
    constructor(){
        super()
        this.state = {
            error:null,
            isLoaded:false,
            users:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(data=>{
                this.setState({
                    isLoaded:true,
                    users:data
                })
            },
            error=>{
                this.setState({
                    isLoaded:true,
                    error
                })
            }
        );
    }
    render(){
        const { error, isLoaded, users } = this.state
        if(error) {
            return 
                <div>
                    <Navbar />
                    Error : {error.message}
                </div>
        } else if (!isLoaded) {
            return <div>
                       <Navbar />
                       Loading ...
                    </div>
        } else {
            return(
                <div>
                    <Navbar />
                    <h2>API Get Users</h2>
                    <ul>
                        {users.map(user=>(
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                </div> 
            )
        }
    }
}
export default APIGet