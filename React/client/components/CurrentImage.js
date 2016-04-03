class CurrentImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentImage: imageData[0]
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.state.CurrentImage.title}
        </div>
        <img className="image" src={this.state.CurrentImage.url} />
      </div>
    )
  }
}

window.CurrentImage = CurrentImage;