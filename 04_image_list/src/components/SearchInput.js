import React from "react";

class SearcInput extends React.Component {
//     onInputChange = (event) => {
//       console.log(event)
//     console.log(event.target.value);
//   }
    
    constructor(props) {
        super(props);
        this.state = { entry: '' };

        // this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    // onFormSubmit(event) {
    //     event.preventDefault()
    //     console.log(this.state.entry)
    // }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.entry);
    }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                // onChange={(event) => console.log(event.target.value)}
                            onChange={(event) => this.setState({ entry: event.target.value })}
                            value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearcInput;
