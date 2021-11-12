var data = [
[
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Modeling Complex Logic', value: 1.0},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Time Series Analysis', value: 1},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Stream Processing', value: 1},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Modeling Uncertainty', value: 1.0},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'APIs & serverless', value: 1.0},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Zero-touch automation', value: 1},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Scalability', value: 0.8},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Explainability', value: 1}
],
[
{ legend: 'Finite State Machines', shortLegend: 'FSM', axis: 'Modeling Complex Logic', value: 0.2},
{ legend: 'Finite State Machines', shortLegend: 'FSM', axis: 'Time Series Analysis', value: 0},
{ legend: 'Finite State Machines', shortLegend: 'FSM', axis: 'Stream Processing', value: 0.1},
{ legend: 'Finite State Machines', shortLegend: 'FSM', axis: 'Modeling Uncertainty', value: 0},
{ legend: 'Finite State Machines', shortLegend: 'FSM', axis: 'APIs & serverless', value: 0.4},
{ legend: 'Finite State Machines', shortLegend: 'FSM', axis: 'Zero-touch automation', value: 0.4},
{ legend: 'Finite State Machines', shortLegend: 'FSM', axis: 'Scalability', value: 0.4},
{ legend: 'Finite State Machines', shortLegend: 'FSM', axis: 'Explainability', value: 0.4}
],
[
{ legend: 'Flow Processing Engines', shortLegend: 'FBP', axis: 'Modeling Complex Logic', value: 0.2},
{ legend: 'Flow Processing Engines', shortLegend: 'FBP', axis: 'Time Series Analysis', value: 0},
{ legend: 'Flow Processing Engines', shortLegend: 'FBP', axis: 'Stream Processing', value: 0.2},
{ legend: 'Flow Processing Engines', shortLegend: 'FBP', axis: 'Modeling Uncertainty',  value: 0},
{ legend: 'Flow Processing Engines', shortLegend: 'FBP', axis: 'APIs & serverless', value: 0.6},
{ legend: 'Flow Processing Engines', shortLegend: 'FBP', axis: 'Zero-touch automation', value: 0.2},
{ legend: 'Flow Processing Engines', shortLegend: 'FBP', axis: 'Scalability', value: 0.8},
{ legend: 'Flow Processing Engines', shortLegend: 'FBP', axis: 'Explainability', value: 0.4}
],
[
{ legend: 'Stream Processing Engines', shortLegend: 'Stream Proc.', axis: 'Modeling Complex Logic', value:0.2},
{ legend: 'Stream Processing Engines', shortLegend: 'Stream Proc.', axis: 'Time Series Analysis', value: 0.4},
{ legend: 'Stream Processing Engines', shortLegend: 'Stream Proc.', axis: 'Stream Processing', value: 1 },
{ legend: 'Stream Processing Engines', shortLegend: 'Stream Proc.', axis: 'Modeling Uncertainty', value: 0},
{ legend: 'Stream Processing Engines', shortLegend: 'Stream Proc.', axis: 'APIs & serverless', value: 0},
{ legend: 'Stream Processing Engines', shortLegend: 'Stream Proc.', axis: 'Zero-touch automation', value: 0.2},
{ legend: 'Stream Processing Engines', shortLegend: 'Stream Proc.', axis: 'Scalability', value: 1.0},
{ legend: 'Stream Processing Engines', shortLegend: 'Stream Proc.', axis: 'Explainability', value:0.2}
],
[
{ legend: 'Forward Chaining Engines', shortLegend: 'Forward Chaining', axis: 'Modeling Complex Logic', value: 0.4},
{ legend: 'Forward Chaining Engines', shortLegend: 'Forward Chaining', axis: 'Time Series Analysis',value: 0},
{ legend: 'Forward Chaining Engines', shortLegend: 'Forward Chaining', axis: 'Stream Processing',value: 0},
{ legend: 'Forward Chaining Engines', shortLegend: 'Forward Chaining', axis: 'Modeling Uncertainty', value: 0},
{ legend: 'Forward Chaining Engines', shortLegend: 'Forward Chaining', axis: 'APIs & serverless', value: 0.2},
{ legend: 'Forward Chaining Engines', shortLegend: 'Forward Chaining', axis: 'Zero-touch automation', value: 0.2},
{ legend: 'Forward Chaining Engines', shortLegend: 'Forward Chaining', axis: 'Scalability', value: 0.2},
{ legend: 'Forward Chaining Engines', shortLegend: 'Forward Chaining', axis: 'Explainability', value: 0.2}
],
[
{ legend: 'Condition Action Engines', shortLegend: 'Cond.-Action', axis: 'Modeling Complex Logic', value: 0},
{ legend: 'Condition Action Engines', shortLegend: 'Cond.-Action', axis: 'Time Series Analysis',value: 0},
{ legend: 'Condition Action Engines', shortLegend: 'Cond.-Action', axis: 'Stream Processing',value: 0.3},
{ legend: 'Condition Action Engines', shortLegend: 'Cond.-Action', axis: 'Modeling Uncertainty', value: 0},
{ legend: 'Condition Action Engines', shortLegend: 'Cond.-Action', axis: 'APIs & serverless', value: 0.8},
{ legend: 'Condition Action Engines', shortLegend: 'Cond.-Action', axis: 'Zero-touch automation', value: 0.8},
{ legend: 'Condition Action Engines', shortLegend: 'Cond.-Action', axis: 'Scalability', value: 0.8},
{ legend: 'Condition Action Engines', shortLegend: 'Cond.-Action', axis: 'Explainability', value: 1}
]
// ,
// [
// { legend: 'CEP Engines', shortLegend: 'CEP', axis: 'Modeling Complex Logic', value: 0.2},
// { legend: 'CEP Engines', shortLegend: 'CEP', axis: 'Time Series Analysis', value: 0.4},
// { legend: 'CEP Engines', shortLegend: 'CEP', axis: 'Stream Processing', value: 0.3},
// { legend: 'CEP Engines', shortLegend: 'CEP', axis: 'Modeling Uncertainty', value: 0},
// { legend: 'CEP Engines', shortLegend: 'CEP', axis: 'APIs & serverless', value: 0.2 },
// { legend: 'CEP Engines', shortLegend: 'CEP', axis: 'Zero-touch automation', value: 0.2 },
// { legend: 'CEP Engines', shortLegend: 'CEP', axis: 'Scalability', value: 0.2},
// { legend: 'CEP Engines', shortLegend: 'CEP', axis: 'Explainability', value: 0.2}
// ]
// ,
// [
// { legend: 'Decision Trees/Tables', shortLegend: 'DT', axis: 'Modeling Complex Logic', value: 0.4},
// { legend: 'Decision Trees/Tables', shortLegend: 'DT', axis: 'Time Series Analysis', value: 0},
// { legend: 'Decision Trees/Tables', shortLegend: 'DT', axis: 'Stream Processing', value: 0},
// { legend: 'Decision Trees/Tables', shortLegend: 'DT', axis: 'Modeling Uncertainty', value: 0},
// { legend: 'Decision Trees/Tables', shortLegend: 'DT', axis: 'APIs & serverless', value: 0},
// { legend: 'Decision Trees/Tables', shortLegend: 'DT', axis: 'Zero-touch automation', value: 0},
// { legend: 'Decision Trees/Tables', shortLegend: 'DT', axis: 'Scalability', value: 0},
// { legend: 'Decision Trees/Tables', shortLegend: 'DT', axis: 'Explainability', value: 0.6}
// ]
];

var industries = [
[
{ legend: 'Security', axis: 'Modeling Complex Logic', value: 1.0},
{ legend: 'Security', axis: 'Time Series Analysis', value: 1.0},
{ legend: 'Security', axis: 'Stream Processing', value: 1.0},
{ legend: 'Security', axis: 'Modeling Uncertainty',  value: 0.5},
{ legend: 'Security', axis: 'APIs & serverless', value: 1.0},
{ legend: 'Security', axis: 'Zero-touch automation', value: 1.0},
{ legend: 'Security', axis: 'Scalability', value: 1.0},
{ legend: 'Security', axis: 'Explainability', value: 1.0}
],
[
{ legend: 'Payment Processing', axis: 'Modeling Complex Logic', value: 1.0},
{ legend: 'Payment Processing', axis: 'Time Series Analysis', value: 1.0},
{ legend: 'Payment Processing', axis: 'Stream Processing', value: 1.0},
{ legend: 'Payment Processing', axis: 'Modeling Uncertainty',  value: 0.6},
{ legend: 'Payment Processing', axis: 'APIs & serverless', value: 1.0},
{ legend: 'Payment Processing', axis: 'Zero-touch automation', value: 1.0},
{ legend: 'Payment Processing', axis: 'Scalability', value: 1.0},
{ legend: 'Payment Processing', axis: 'Explainability', value: 1.0}
],
[
{ legend: 'Health Care', axis: 'Modeling Complex Logic', value: 1.0},
{ legend: 'Health Care', axis: 'Time Series Analysis', value: 1.0},
{ legend: 'Health Care', axis: 'Stream Processing', value: 1.0},
{ legend: 'Health Care', axis: 'Modeling Uncertainty',  value: 0.8},
{ legend: 'Health Care', axis: 'APIs & serverless', value: 1.0},
{ legend: 'Health Care', axis: 'Zero-touch automation', value: 1.0},
{ legend: 'Health Care', axis: 'Scalability', value: 1.0},
{ legend: 'Health Care', axis: 'Explainability', value: 1.0}
],
[
{ legend: 'Industry 4.0', axis: 'Modeling Complex Logic', value: 0.75},
{ legend: 'Industry 4.0', axis: 'Time Series Analysis', value: 1},
{ legend: 'Industry 4.0', axis: 'Stream Processing', value: 1.0},
{ legend: 'Industry 4.0', axis: 'Modeling Uncertainty', value: 0.2},
{ legend: 'Industry 4.0', axis: 'APIs & serverless', value: 0.8},
{ legend: 'Industry 4.0', axis: 'Zero-touch automation', value: 1.0},
{ legend: 'Industry 4.0', axis: 'Scalability', value: 0.9},
{ legend: 'Industry 4.0', axis: 'Explainability', value: 1.0}
],
[
{ legend: 'Connected Buildings', axis: 'Modeling Complex Logic', value: 0.95},
{ legend: 'Connected Buildings', axis: 'Time Series Analysis', value: 1.0},
{ legend: 'Connected Buildings', axis: 'Stream Processing', value: 1.0},
{ legend: 'Connected Buildings', axis: 'Modeling Uncertainty',  value: 0},
{ legend: 'Connected Buildings', axis: 'APIs & serverless', value: 0.6},
{ legend: 'Connected Buildings', axis: 'Zero-touch automation', value: 0.6},
{ legend: 'Connected Buildings', axis: 'Scalability', value: 0.4},
{ legend: 'Connected Buildings', axis: 'Explainability', value: 1.0}
],
[
{ legend: 'Agriculture', axis: 'Modeling Complex Logic', value: 0.2},
{ legend: 'Agriculture', axis: 'Time Series Analysis', value: 0.8},
{ legend: 'Agriculture', axis: 'Stream Processing', value: 0.8},
{ legend: 'Agriculture', axis: 'Modeling Uncertainty', value: 0.2 },
{ legend: 'Agriculture', axis: 'APIs & serverless', value: 0.6 },
{ legend: 'Agriculture', axis: 'Zero-touch automation', value: 0.8 },
{ legend: 'Agriculture', axis: 'Scalability', value: 0.6},
{ legend: 'Agriculture', axis: 'Explainability', value: 1}
],
[
{ legend: 'Track-Trace', axis: 'Modeling Complex Logic', value: 0.2},
{ legend: 'Track-Trace', axis: 'Time Series Analysis',value: 0.2},
{ legend: 'Track-Trace', axis: 'Stream Processing',value: 1},
{ legend: 'Track-Trace', axis: 'Modeling Uncertainty', value: 0},
{ legend: 'Track-Trace', axis: 'APIs & serverless', value: 0.6},
{ legend: 'Track-Trace', axis: 'Zero-touch automation', value: 1},
{ legend: 'Track-Trace', axis: 'Scalability', value: 0.6},
{ legend: 'Track-Trace', axis: 'Explainability', value: 1}
],
[
{ legend: 'Edge', axis: 'Modeling Complex Logic', value: 0.4},
{ legend: 'Edge', axis: 'Time Series Analysis', value: 0.8},
{ legend: 'Edge', axis: 'Stream Processing', value: 1},
{ legend: 'Edge', axis: 'Modeling Uncertainty', value: 0.1},
{ legend: 'Edge', axis: 'APIs & serverless', value: 0.4},
{ legend: 'Edge', axis: 'Zero-touch automation', value: 0.4},
{ legend: 'Edge', axis: 'Scalability', value: 0.4},
{ legend: 'Edge', axis: 'Explainability', value: 1.0}
],
[
{ legend: 'Oil-Gas', axis: 'Modeling Complex Logic', value: 0.8 },
{ legend: 'Oil-Gas', axis: 'Time Series Analysis', value: 1.0 },
{ legend: 'Oil-Gas', axis: 'Stream Processing', value: 1.0 },
{ legend: 'Oil-Gas', axis: 'Modeling Uncertainty', value: 0 },
{ legend: 'Oil-Gas', axis: 'APIs & serverless', value: 0.6 },
{ legend: 'Oil-Gas', axis: 'Zero-touch automation', value: 0.4 },
{ legend: 'Oil-Gas', axis: 'Scalability', value: 0.8 },
{ legend: 'Oil-Gas', axis: 'Explainability', value: 1.0 }
],
[
{ legend: 'Utility', axis: 'Modeling Complex Logic', value: 0.2 },
{ legend: 'Utility', axis: 'Time Series Analysis', value: 0.2 },
{ legend: 'Utility', axis: 'Stream Processing', value: 0.2 },
{ legend: 'Utility', axis: 'Modeling Uncertainty', value: 0 },
{ legend: 'Utility', axis: 'APIs & serverless', value: 0.4 },
{ legend: 'Utility', axis: 'Zero-touch automation', value: 1 },
{ legend: 'Utility', axis: 'Scalability', value: 0.7 },
{ legend: 'Utility', axis: 'Explainability', value: 1 }
]
// ,
// [
// { legend: 'Smart Home', axis: 'Modeling Complex Logic', value: 1},
// { legend: 'Smart Home', axis: 'Time Series Analysis', value: 1.0 },
// { legend: 'Smart Home', axis: 'Stream Processing', value: 1.0 },
// { legend: 'Smart Home', axis: 'Modeling Uncertainty', value: 0.2 },
// { legend: 'Smart Home', axis: 'APIs & serverless', value: 1},
// { legend: 'Smart Home', axis: 'Zero-touch automation', value: 1},
// { legend: 'Smart Home', axis: 'Scalability', value: 1},
// { legend: 'Smart Home', axis: 'Explainability', value: 1 }
// ]
];


function calculateScore () {
  return industries.map(industry => {
   var scores = {}
   data.forEach(rule => {
     var score = 0
     rule.forEach(m =>{
       score += parseFloat(m.value) * parseFloat(industry.find(x => x.axis === m.axis).value)
       const d = parseFloat(parseFloat(score).toFixed(1))
       scores[rule[0].legend] = d
     })
   })
   return { legend: industry[0].legend, scores } 
  })
 }

var score = calculateScore()

const COLORS = [
  '#003f5c', '#2f4b7c',
  '#665191', '#a05195',
  '#d45087', '#f95d6a',
  '#ff7c43', '#ffa600'
]

var chart = {
    type: 'bar', 
    options: {
       legend: {display: true},
       title: {
         display: true,
         text: 'Industry scores'
      }
    },
    data: {
     datasets: []
    }
  }
chart.data.labels = score.map(e => e.legend)
var rules =  Object.keys(score[0].scores)
var dd = {}
score.forEach(industry => {
 rules.forEach(r => {
  if(dd[r] === undefined) 
   dd[r] = []
  dd[r].push(industry.scores[r])
  console.log(r, industry.scores[r])
 })
})
var i = 0
Object.keys(dd).forEach(key => {
 chart.data.datasets.push({
  label: key,
  data: dd[key],
  backgroundColor: Array(dd[key].length).fill(COLORS[i++]) 
 })
})

