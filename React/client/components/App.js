// app.js

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageList: imageData,
      currentImage: imageData[0]
    };
  }

  selectImage(image){
    this.setState({currentImage: image}).bind(this);
    console.log('fired');
  }

  render() {
    return (
      <div>
        <ImageList imageList={this.state.imageList} handleClick={this.selectImage.bind(this)}/>
        <CurrentImage currentImage={this.state.currentImage} />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('app'))