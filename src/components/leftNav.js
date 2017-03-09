import React from 'react';
import {Link} from 'react-router'


class leftNav extends React.Component {
  render () {
    return(
      <div className="leftnav">
        <h3>我的{this.props.title}</h3>
        <Link to = "/" activeStyle={{backgroundColor: 'rgba(0,0,0,0.5)'}} onlyActiveOnIndex={true}> <i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  Home</Link>
        <Link to = "/blog" activeStyle={{backgroundColor: 'rgba(0,0,0,0.5)'}} > <i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  blog</Link>
        <Link to = "/work" activeStyle={{backgroundColor: 'rgba(0,0,0,0.5)'}} > <i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  work</Link>
        <Link to = "/about" activeStyle={{backgroundColor: 'rgba(0,0,0,0.5)'}} > <i className="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;  about</Link>
      </div>
    )
  }
}

export default leftNav;
