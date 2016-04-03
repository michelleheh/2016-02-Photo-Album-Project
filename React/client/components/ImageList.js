class ImageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageList: this.props.data
    };
  }

  render() {
    return (
      <div className="image-list">
        {this.props.imageList.map(image =>
          <ImageListEntry currentImage={this.props.handleClick} imageData={image} />
        )}
      </div>
    );
  }
};

window.ImageList = ImageList;