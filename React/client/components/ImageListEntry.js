class ImageListEntry extends React.Component {

  constructor(props) {
    super(props);
  }

  entryClick() {
    this.props.handleClick(this.props.imageData);
  }
  
  render() {
    return (
      <div onClick={this.entryClick.bind(this)}>{this.props.imageData.title}</div>
    );
  }
}

window.ImageListEntry = ImageListEntry