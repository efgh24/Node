import React from "react";
import ReactDOM from "react-dom";


const reactElement =  <ol> <li>Blue</li> <li>Red</li><li>Purple</li></ol> 

ReactDOM.render(reactElement, document.getElementById('root'));

// class ordered_list extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="order-list"> 
//         <ol>
//           <li>Blue</li>
//           <li>Red</li>
//           <li>Purple</li>
//         </ol> 
//         </div>        
//     );
//   }
// }


//ReactDOM.render(<ordered_list />, document.getElementById('root'));

ReactDOM(<ol> <li>Blue</li> <li>Red</li><li>Purple</li></ol> ,document.getElementById('root') );