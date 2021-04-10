import React from 'react';
import axios from 'axios';

export default class MemberList extends React.Component {
    state = {
        members: []
    }


componentDidMount() {
    axios.get(`http://localhost:4000/members`).then(res => {
        console.log(res)
        this.setState({ members: res.data })
    });

}

render() {
    return(
        <ul>
            {this.state.members.map(member => <li key={member.id}>{member.memberImage}</li>)}
        </ul>
    )
}



}
