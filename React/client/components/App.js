// app.js

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageList: imageData,
      currentImage: imageData[0]
    };
  }

  selectImage(image) {
    this.setState({currentImage: image});
  }

  handleRatingFunc(rating) {
    console.log(this.state.currentImage.rating);
    this.state.currentImage.rating = rating;
    console.log(this.state.currentImage.rating);
    this.setState(this.state.currentImage);
  }

  render() {
    return (
      <div>
        <ImageList imageList={this.state.imageList} handleClick={this.selectImage.bind(this)} />
        <CurrentImage currentImage={this.state.currentImage} />
        <Rating handleRatingFunc={this.handleRatingFunc.bind(this)} rating={this.state.currentImage.rating} />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('app'))