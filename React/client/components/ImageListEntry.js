class ImageListEntry extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>{this.props.imageData.title}</div>
    );
  }
}

window.ImageListEntry = ImageListEntry