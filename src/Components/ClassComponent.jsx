// import React, { Component } from "react";

// class ClassComponent extends Component{
// constructor(){
// super()
// }
// render(){
//     return(
//         <div>
//          <h2>class Component </h2>        
//          <h2>class Component </h2>        
//          <h2>class Component </h2>        
//          <h2>class Component </h2>        
//          <h2>class Component </h2>        
//          <h2>class Component </h2>        
//          <h2>class Component </h2>        
//          <h2>class Component </h2>        
//          <h2>class Component </h2>        
//          <h2>class Component </h2>        
//          <h2>class Component </h2>        
//          <h2>class Component </h2>        
//         </div>
//     )
// }
// }
// export default ClassComponent

import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor() {
        super()
    }

    render() {
        const{cource, duration } = this.props
          return (
            <div>
                <h2>ClassComponent</h2>
                <h3>cource:{cource}</h3>
                <h3>Duration:{duration}</h3>
            </div>
          )
        }
    }


        
        export default ClassComponent;