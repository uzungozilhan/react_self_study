import React from 'react';
import SearcInput from './SearchInput';
import axios from 'axios';
import ImageList from './ImageList';

class App extends React.Component {

    state = {images: []}

    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=23033909-48a0cd85836bc2bb34efd246f&q=${entry}&image_type=photo&pretty=true`)
        console.log(response.data.hits)
        this.setState({ images: response.data.hits });
    }

    render(){
    return (
        <div className="ui container" style={{marginTop: "30px"}}>
            <SearcInput onSearchSubmit={this.onSearchSubmit} />
            <ImageList images={ this.state.images }/>
        </div>
        )
    }
}

export default App;