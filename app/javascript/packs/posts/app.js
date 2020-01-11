import React from "react";
import Search from './search';
import Results from './results';

let dummyData = [
  { data: { title: "Hello from data", url: "http://www.test.com" } },
  { data: { title: "Hello from data2", url: "http://www.test.com2" } },
];

export default class App extends React.Component {
  constructor() {
    super(arguments);

    this.state = {
      data: dummyData
    };
  }

  getResults(event) {
    const { value } = event.target;
    const url = `/posts.json?q=${value}`;
    fetch(url)
        .then(r => r.json())
        .then(json => {
          console.log(json.data.children);
          this.setState({
            data: json.data.children
          })
        });
  }

  render() {
    const { data } = this.state;

    return (
        <div>
          <Search getResults={(event) => this.getResults(event)} />
          <Results data={data} />
        </div>
    )
  }
}
