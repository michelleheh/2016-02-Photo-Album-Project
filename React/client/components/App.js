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
    this.state.currentImage.rating = rating;
    ReactDOM.render(<App />, document.getElementById('app'));
  }

  addImage(title, url) {
    var image ={
      title: title,
      url: url,
      rating: 0
    };
    imageData.unshift(image);
    this.setState({imageList: imageData, currentImage: image});
  }

  render() {
    return (
      <div>
        <AddImageForm handleAddImageFunc={this.addImage.bind(this)} />
        <ImageList imageList={this.state.imageList} handleClick={this.selectImage.bind(this)} />
        <CurrentImage currentImage={this.state.currentImage} />
        <Rating handleRatingFunc={this.handleRatingFunc.bind(this)} rating={this.state.currentImage.rating} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'))