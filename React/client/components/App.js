// app.js

class App extends React.Component {
  render() {
    return (
      <div>
        <ImageList data={imageData} />
        <CurrentImage />
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('app'))