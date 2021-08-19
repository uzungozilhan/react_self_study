import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {

//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (error) => console.log(error)
//   );
//   return (
//     <div>
//       Hello World
//     </div>
//   )
// }

class App extends React.Component{

  constructor(props) {
    super(props)

    this.state = { latitude: 25, errorMessage: "" }
    
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },
      (error) => {
        this.setState({errorMessage: error.message})
      }
    );
    
  }

  // componentDidMount() {
  //   console.log("componentDidMount")
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate")
  // }

  render() {
    
    
      if (this.state.errorMessage && !this.state.latitude) {
        return <div> {this.state.errorMessage} </div>
    }
      if (!this.state.errorMessage && this.state.latitude) {
        return <div> {this.state.latitude} </div>
      } else {
        return <div>Loading...</div>
      }
      
    
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)
