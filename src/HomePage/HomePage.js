import React from 'react';
import PieChart from '../PieChart/PieChart';

import PieClass from "../D3Chart/D3Chart";
function HomePage() {
    const margin = {
        top: 50, right: 50, bottom: 50, left: 50,
    };
  return (
    <main className="container center">

    <div class="page-area">

        <div class="text-box">
            <article>
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </article> 
        
        </div>
        

        <div class="text-box">
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
            <button type="button">Alert</button>
        </div>

        <div class="text-box">
            <h1>Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </div>

        <div class="text-box">
            <h1>Free</h1>
            <p>
                This app is free!!! And you are the only one holding your data!
            </p>
        </div>

        <div class="text-box">
            <h1>Stay on track</h1>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </div>

        <div class="text-box">
            <h1>Alerts</h1>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </div>

        <div class="text-box">
            <h1> Budget Results</h1>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
            <p>
                This app works in English and <i lang="it" class="idiomatic"> Felicio </i>  Italian
            </p>
        </div>

        <div class="text-box">
            <h1>Chart</h1>
                {/* <canvas id="myChart" width="400" height="400"></canvas>  */}
                <PieChart/>
            
        </div>
        <div>
            <h1>D3JS Chart</h1>
            <PieClass
            innerRadius={80}
            outerRadius={200}
            margin={margin}/>
      </div>
    </div>

</main>
  );
}

export default HomePage;
