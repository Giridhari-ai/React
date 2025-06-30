// import React from "react";

// function FunComp(){
// return(
//     <div>
//        <h2>Functional component </h2>
//        <h2>Functional component </h2>
//        <h2>Functional component </h2>
//        <h2>Functional component </h2>
//        <h2>Functional component </h2>
//        <h2>Functional component </h2>
//        <h2>Functional component </h2>
//        <h2>Functional component </h2>
//        <h2>Functional component </h2>
//        <h2>Functional component </h2>
//        <h2>Functional component </h2>
//        <h2>Functional component </h2>
//     </div>
// )
// }
// const FunComp = () =>{
//     return(
//         <div>
//             <h2> functional </h2>
//         </div>
//     )
// }


// export default FunComp


import React from 'react'

const FunComp = ({cource, duration}) => {
 // console.log(props);
  
  return (
    <div>
        <h2>Functional component</h2>
           <h3>cource:{cource}</h3>
          <h3>Duration:{duration}</h3>
    </div>
  )
}

export default FunComp