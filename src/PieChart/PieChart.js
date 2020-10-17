import React from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';


const state = {
    labels: [],
    datasets: [
      {
        label: 'Personal Budget',
        backgroundColor: ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"],
        data: []
      }
    ]
  }
export default class PieChart extends React.Component{


    
      componentDidMount() {
        axios.get(`http://localhost:3000/budget`)
          .then(res => {
            for (var i = 0; i < res.data.myBudget.length; i++) {
                state.datasets[0].data[i] = res.data.myBudget[i].budget;
                state.labels[i] = res.data.myBudget[i].title;
            }
            this.setState({ state });
          })
      }
    
      render() {
        return (
            <div>
              <Pie
                data={state}
                options={{
                  legend:{
                    display:true,
                    position:'right'
                  }
                }}
              />
            </div>
          );
      }
   
  }


  


  