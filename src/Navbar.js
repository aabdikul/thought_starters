import React from 'react'
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '100px',
  padding: '8px',
  margin: '6px 6px 6px',
  background: 'white',
  textDecoration: 'none',
  color: 'black',
  fontFamily: 'Didot'
}
 
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/home"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          /* add styling to Navlink */
          style={link}
          /* add prop for activeStyle */
          activeStyle={{
            background: 'black',
            color: 'white'
          }}
        >Home</NavLink>
        
        <NavLink
          to="/create"
          exact
          style={link}
          activeStyle={{
            background: 'black',
            color: 'white'
          }}
          >Create Post</NavLink>
          
          <NavLink
          to="liked"
          exact
          style={link}
          activeStyle={{
            background: 'black',
            color: 'white'
          }}
          >Liked Posts</NavLink>
      </div>
    )
  }
}
 
export default Navbar;