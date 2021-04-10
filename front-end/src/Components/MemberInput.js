// import React from 'react';
// import axios from 'axios';


// export default class MemberInput extends React.Component {
//     state = {
//         name: ''

//     };

//     handleChange = (e) => {
//         this.setState({ name: e.target.value });
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();

//         const member = {
//             name: this.state.name,
//             lastName: this.state.lastName
//         }

//         axios.post(`http://localhost:4000/members`, { member }).then(res => {
//             console.log(res);
//             console.log(res.data);
//         })
//     }






// render() {
//     return(
//         <form onSubmit={this.handleSubmit}>
//             <label>
//                 Member Name:
//                 <input type="text" name="name" onChange={this.handleChange}/>
//             </label>
//             <label>
//                 Member Last Name:
//                 <input type="text" name="lastName" onChange={this.handleChange}/>
//             </label>
//             <button type="submit">Add</button>
//         </form>
//     )
// }



// }
