class Rating extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRating(event) {
    this.props.handleRatingFunc(event.target.value);
  } 
  
  render() {
    return (
      <select value={this.props.rating} onChange={this.handleRating.bind(this)}>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    );
  } 
}

window.Rating = Rating;