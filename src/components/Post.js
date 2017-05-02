import React from 'react';
import axios from 'axios';

import marked from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  highlight: function (code){
    return hljs.highlightAuto(code).value;
  }
});


class Post extends React.Component {

  constructor(){
    super()
    this.state={
      data: ''
    }
  }

  componentDidMount(){
    axios.get(`https://raw.githubusercontent.com/MrYang93/myblog/master/blogs/${this.props.params.title}.md`)
      .then( res => this.setState( {data: res.data}) )
  }

  render () {
    return(
      <div>
        {this.state.data.length==0 ? '正在加载' :
          <div dangerouslySetInnerHTML={{__html:marked(this.state.data)}}>
          </div>
        }
      </div>
    )
  }
}

// let Post = function (props){
//   console.log(props);
//   return(
//     <div></div>
//   )
// }  函数组件只可以接受props ,也有传其他的,比如params,其实也是接受的props,
//只是用的结构赋值{params}=props,讲对象props中属性名为params的属性赋给另一半,然后传进来用

export default Post;
