import React from 'react';

export default class Results extends React.Component {
  render() {
    const { data } = this.props;

    return (
        <table>
          <tbody>
          {
            data.map(result => (
                <tr>
                  <td><a href={result.data.url}>{result.data.title}</a></td>
                </tr>
            ))
          }
          </tbody>
        </table>
    )
  }
}
