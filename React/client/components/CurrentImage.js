class CurrentImage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="image" src={this.props.currentImage.url} />
        <div>{this.props.currentImage.title}</div>
        <div>{this.props.currentImage.rating} Out of 5</div>
      </div>
    )
  }
}

window.CurrentImage = CurrentImage;