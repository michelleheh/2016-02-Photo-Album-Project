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
        {this.props.imageList.map((image, index) =>
          <ImageListEntry key={index} handleClick={this.props.handleClick} imageData={image} />
        )}
      </div>
    );
  }
};

window.ImageList = ImageList;