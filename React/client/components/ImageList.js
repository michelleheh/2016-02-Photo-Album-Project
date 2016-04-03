class ImageList extends React.Component {
  render() {
    var list = this.props.data.map(function(image) {
      return (
        <div>{image.title}</div>
      );
    });    
    return ( <div>{list}</div> );
  }
};

window.ImageList = ImageList;