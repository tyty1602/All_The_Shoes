import React from "react";

export default class Card extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    fetch('http://localhost:3001/').then(response)
    //need to finish Fetch call/read documentations on it....
    //return allShoesArray as a name return
  }
  render(){
    return(
      <div className="shoes">
        {/* <h3>{Pass through line 11 named return}</h3>  */}
      </div>
    )
  }
}

// function Card() {
//   return (
//     <div className="card">
//       <div className="card-body">
//         <p className="images">
//           Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo magna eu ex
//           mollit sunt amet fugiat. In irure eu enim id ea sit nostrud incididunt ad
//           adipisicing.Aliquip dolore commodo nostrud minim. Cillum do enim non ullamco. Commodo
//           magna eu ex mollit sunt amet fugiat. In irure eu enim id ea sit nostrud incididunt ad
//           adipisicing.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Card;
