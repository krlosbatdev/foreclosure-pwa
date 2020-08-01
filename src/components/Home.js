import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import { listScraps } from '../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';


function Home(props) {

  const [items, setItems] = useState([])

  const getScraps = async () => {

    const scraps = await API.graphql(graphqlOperation(listScraps, { sortDirection: "ASC" }));

    let scrapList = scraps.data.listScraps["items"]
      .map(i => {
        return {
          date: new Date(i.id),
          miamidade: i.md_forclosures,
          florida: i.fl_forclosures
        }
      }).sort((a, b) => a.date - b.date);
    setItems(scrapList)
  }
  useEffect(() => {
    getScraps();
  }, [])


  return (
    <div>
      {items.length ?

        <LineChart
          width={350}
          height={300}
          data={items}
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


        : <span>Loading ...</span>
      }
    </div>
  )
}

export default Home;
