import React from "react";

export default class Card extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      allShoesArray:[]
    };
  }


  componentDidMount() {
    fetch("https://radiant-atoll-34503.herokuapp.com/scrape")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h3>All The Shoes</h3>
        <ul>
          {items.map((item, index) => (
            // <li key={index}>
            //   Name= {item.obj.designer} : Description= {item.obj.description}
            //   <img src={item.obj.image} alt={item.obj.designer}/>
            // </li>
            <li class="list-group-item" key={index}>
              Name= {item.obj.designer} : Description= {item.obj.description}
             <img src={item.obj.image} alt={item.obj.designer}/>
            </li>
          ))}
        </ul>
        </div>
      );
    }
  }
}