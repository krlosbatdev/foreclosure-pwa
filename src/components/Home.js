import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { listScraps } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scraps: []
    }
  }

  async componentDidMount() {
    const scraps = await API.graphql(graphqlOperation(listScraps));
    let scrapList = scraps.data.listScraps["items"].map(i => {
      return {
        date: i.id.substr(0, i.id.indexOf(',')),
        miamidade: i.md_forclosures,
        florida: i.fl_forclosures

      }
    })
    this.setState({ scraps: scrapList })

    //
  }


  render() {
    return (
      <LineChart
        width={350}
        height={300}
        data={this.state.scraps}
        margin={{
          top: 30, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="florida" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="miamidade" stroke="#82ca9d" />
      </LineChart>

    )
  };
}

export default Home;
