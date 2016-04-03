class AddImageForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: ''
    };
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleUrlChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var title = this.state.title.trim();
    var url = this.state.url.trim();
    this.props.handleAddImageFunc(title, url);
  }

  render() {
    return (
      <form className="addImageForm" onSubmit={this.handleSubmit.bind(this)}>
        <input 
          type="text" 
          placeholder="Title" 
          value={this.state.title} 
          onChange={this.handleTitleChange.bind(this)} 
        />
        <input 
          type="text" 
          placeholder="url"
          value={this.state.url} 
          onChange={this.handleUrlChange.bind(this)} 
          />
        <input type="submit" value="Add Image" />
      </form>
    );
  }

}

window.AddImageForm = AddImageForm;