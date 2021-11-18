var data = [
[
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Rules Engine', value: 1.0},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Time Series Analysis', value: 1},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Event Processing', value: 1},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Stream Processing', value: 1},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Machine Learning/AI', value: 0.85},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Data Visualization', value: 0.75},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'APIs & serverless', value: 1.0},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Zero-touch-automation', value: 1},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Scalability', value: 0.85},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Explainability', value: 1},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Integration Simplicity', value: 1},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Data Ingestion', value: 1},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'LPWAN support', value: 1},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Device Management', value: 0.3},
{ legend: 'Waylay', shortLegend: 'Waylay', axis: 'Edge Ready', value: 0.8}
],
[
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Rules Engine', value: 0.4},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Time Series Analysis', value: 0.8},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Event Processing', value: 1},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Stream Processing', value: 1},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Machine Learning/AI', value: 1},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Data Visualization', value: 0.3},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'APIs & serverless', value: 1 },
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Zero-touch-automation', value: 0.2},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Scalability', value: 1},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Explainability', value: 0.6},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Integration Simplicity', value: 0.3},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Data Ingestion', value: 0.9},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'LPWAN support', value: 0.2},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Device Management', value: 0.8},
{ legend: 'AWS', shortLegend: 'AWS', axis: 'Edge Ready', value: 0.25}
],
[
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Rules Engine', value: 0.4},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Time Series Analysis', value: 1.0},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Event Processing', value: 1.0},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Stream Processing', value: 1},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Machine Learning/AI',  value: 1},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Data Visualization',  value: 0.9},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'APIs & serverless', value: 1},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Zero-touch-automation', value: 0.6},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Scalability', value: 1},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Explainability', value: 0.3},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Integration Simplicity', value: 0.5},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Data Ingestion', value: 1},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'LPWAN support', value: 0.4},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Device Management', value: 1},
{ legend: 'Azure', shortLegend: 'Azure', axis: 'Edge Ready', value: 0.4}
],
[
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Rules Engine', value: 0 },
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Time Series Analysis', value: 0.75},
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Event Processing', value: 0.25},
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Stream Processing', value: 1 },
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Machine Learning/AI', value: 0},
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Data Visualization', value: 0.9},
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'APIs & serverless', value: 0},
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Zero-touch-automation', value: 0},
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Scalability', value: 0.85},
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Explainability', value:0},
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Integration Simplicity', value: 0.35},
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Data Ingestion', value: 0.5},
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'LPWAN support', value: 0},
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Device Management', value: 0},
{ legend: 'Kafka-Influx-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Edge Ready', value: 0}
],
[
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Rules Engine', value: 0 },
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Time Series Analysis', value: 0.75},
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Event Processing', value: 1},
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Stream Processing', value: 1 },
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Machine Learning/AI', value: 0},
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Data Visualization', value: 0.9},
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'APIs & serverless', value: 0},
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Zero-touch-automation', value: 0},
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Scalability', value: 0.85},
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Explainability', value:0},
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Integration Simplicity', value: 0.2},
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Data Ingestion', value: 0.5},
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'LPWAN support', value: 0},
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Device Management', value: 0},
{ legend: 'Kafka-Influx-ES-Grafana', shortLegend: 'Kafka-Influx-Grafana', axis: 'Edge Ready', value: 0}
],
[
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Rules Engine', value: 0.2},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Time Series Analysis', value: 0.05},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Event Processing', value: 0.5},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Stream Processing', value: 0.5},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Machine Learning/AI',  value: 0},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Data Visualization',  value: 0.1},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'APIs & serverless', value: 0.1},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Zero-touch-automation', value: 0.1},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Scalability', value: 0.1},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Explainability', value: 0.1},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Integration Simplicity', value: 0.3},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Data Ingestion', value: 1},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'LPWAN support', value: 0.1},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Device Management', value: 0},
{ legend: 'Node RED', shortLegend: 'Node RED', axis: 'Edge Ready', value: 1}
],
[
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Rules Engine', value: 0.75},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Time Series Analysis', value: 0.05},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Event Processing', value: 0.5},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Stream Processing', value: 0.1},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Machine Learning/AI',  value: 0},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Data Visualization',  value: 0},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'APIs & serverless', value: 0.3},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Zero-touch-automation', value: 0.7},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Scalability', value: 0.65},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Explainability', value: 0.8},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Integration Simplicity', value: 0.3},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Data Ingestion', value: 0.3},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'LPWAN support', value: 0},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Device Management', value: 0},
{ legend: 'BPM', shortLegend: 'BPM', axis: 'Edge Ready', value: 0.75}
]
];

var industries = [
[
{ legend: 'Security', axis: 'Rules Engine', value: 1.0},
{ legend: 'Security', axis: 'Time Series Analysis', value: 1.0},
{ legend: 'Security', axis: 'Event Processing', value: 1.0},
{ legend: 'Security', axis: 'Stream Processing', value: 1.0},
{ legend: 'Security', axis: 'Machine Learning/AI',  value: 1},
{ legend: 'Security', axis: 'Data Visualization',  value: 0.1},
{ legend: 'Security', axis: 'APIs & serverless', value: 1.0},
{ legend: 'Security', axis: 'Zero-touch-automation', value: 1.0},
{ legend: 'Security', axis: 'Scalability', value: 1.0},
{ legend: 'Security', axis: 'Explainability', value: 1.0},
{ legend: 'Security', axis: 'Integration Simplicity', value: 1.0},
{ legend: 'Security', axis: 'Data Ingestion', value: 1.0},
{ legend: 'Security', axis: 'LPWAN support', value: 0 },
{ legend: 'Security', axis: 'Device Management', value: 0 },
{ legend: 'Security', axis: 'Edge Ready', value: 0.4 }
],
[
{ legend: 'Payment Processing', axis: 'Rules Engine', value: 1.0},
{ legend: 'Payment Processing', axis: 'Time Series Analysis', value: 1.0},
{ legend: 'Payment Processing', axis: 'Event Processing', value: 1.0},
{ legend: 'Payment Processing', axis: 'Stream Processing', value: 1.0},
{ legend: 'Payment Processing', axis: 'Machine Learning/AI',  value: 1},
{ legend: 'Payment Processing', axis: 'Data Visualization',  value: 0.1},
{ legend: 'Payment Processing', axis: 'APIs & serverless', value: 1.0},
{ legend: 'Payment Processing', axis: 'Zero-touch-automation', value: 1.0},
{ legend: 'Payment Processing', axis: 'Scalability', value: 1.0},
{ legend: 'Payment Processing', axis: 'Explainability', value: 1.0},
{ legend: 'Payment Processing', axis: 'Integration Simplicity', value: 1.0},
{ legend: 'Payment Processing', axis: 'Data Ingestion', value: 0},
{ legend: 'Payment Processing', axis: 'LPWAN support', value: 0 },
{ legend: 'Payment Processing', axis: 'Device Management', value: 0 },
{ legend: 'Payment Processing', axis: 'Edge Ready', value: 0 }
],
[
{ legend: 'Health Care', axis: 'Rules Engine', value: 1.0},
{ legend: 'Health Care', axis: 'Time Series Analysis', value: 1.0},
{ legend: 'Health Care', axis: 'Event Processing', value: 1.0},
{ legend: 'Health Care', axis: 'Stream Processing', value: 1.0},
{ legend: 'Health Care', axis: 'Machine Learning/AI',  value: 1},
{ legend: 'Health Care', axis: 'Data Visualization',  value: 1},
{ legend: 'Health Care', axis: 'APIs & serverless', value: 1.0},
{ legend: 'Health Care', axis: 'Zero-touch-automation', value: 1.0},
{ legend: 'Health Care', axis: 'Scalability', value: 1.0},
{ legend: 'Health Care', axis: 'Explainability', value: 1.0},
{ legend: 'Health Care', axis: 'Integration Simplicity', value: 1.0},
{ legend: 'Health Care', axis: 'Data Ingestion', value: 0.5 },
{ legend: 'Health Care', axis: 'LPWAN support', value: 0 },
{ legend: 'Health Care', axis: 'Device Management', value: 0.2 },
{ legend: 'Health Care', axis: 'Edge Ready', value: 0.75 }
],
[
{ legend: 'Industry 4.0', axis: 'Rules Engine', value: 0.75},
{ legend: 'Industry 4.0', axis: 'Time Series Analysis', value: 1},
{ legend: 'Industry 4.0', axis: 'Event Processing', value: 1.0},
{ legend: 'Industry 4.0', axis: 'Stream Processing', value: 1.0},
{ legend: 'Industry 4.0', axis: 'Machine Learning/AI', value: 0.85},
{ legend: 'Industry 4.0', axis: 'Data Visualization', value: 1},
{ legend: 'Industry 4.0', axis: 'APIs & serverless', value: 0.8},
{ legend: 'Industry 4.0', axis: 'Zero-touch-automation', value: 1.0},
{ legend: 'Industry 4.0', axis: 'Scalability', value: 0.9},
{ legend: 'Industry 4.0', axis: 'Explainability', value: 1.0},
{ legend: 'Industry 4.0', axis: 'Integration Simplicity', value: 1.0},
{ legend: 'Industry 4.0', axis: 'Data Ingestion', value: 1 },
{ legend: 'Industry 4.0', axis: 'LPWAN support', value: 1 },
{ legend: 'Industry 4.0', axis: 'Device Management', value: 1 },
{ legend: 'Industry 4.0', axis: 'Edge Ready', value: 0.85 }
],
[
{ legend: 'Connected Buildings', axis: 'Rules Engine', value: 0.95},
{ legend: 'Connected Buildings', axis: 'Time Series Analysis', value: 1.0},
{ legend: 'Connected Buildings', axis: 'Event Processing', value: 1.0},
{ legend: 'Connected Buildings', axis: 'Stream Processing', value: 1.0},
{ legend: 'Connected Buildings', axis: 'Machine Learning/AI',  value: 0.8},
{ legend: 'Connected Buildings', axis: 'Data Visualization',  value: 1},
{ legend: 'Connected Buildings', axis: 'APIs & serverless', value: 0.6},
{ legend: 'Connected Buildings', axis: 'Zero-touch-automation', value: 0.6},
{ legend: 'Connected Buildings', axis: 'Scalability', value: 0.4},
{ legend: 'Connected Buildings', axis: 'Explainability', value: 1.0},
{ legend: 'Connected Buildings', axis: 'Integration Simplicity', value: 1},
{ legend: 'Connected Buildings', axis: 'Data Ingestion', value: 1},
{ legend: 'Connected Buildings', axis: 'LPWAN support', value: 0.8},
{ legend: 'Connected Buildings', axis: 'Device Management', value: 0.9},
{ legend: 'Connected Buildings', axis: 'Edge Ready', value: 0.95 }
],
[
{ legend: 'Agriculture', axis: 'Rules Engine', value: 0.2},
{ legend: 'Agriculture', axis: 'Time Series Analysis', value: 0.8},
{ legend: 'Agriculture', axis: 'Event Processing', value: 0.5},
{ legend: 'Agriculture', axis: 'Stream Processing', value: 0.8},
{ legend: 'Agriculture', axis: 'Machine Learning/AI', value: 0.8 },
{ legend: 'Agriculture', axis: 'Data Visualization', value: 0.8 },
{ legend: 'Agriculture', axis: 'APIs & serverless', value: 0.6 },
{ legend: 'Agriculture', axis: 'Zero-touch-automation', value: 0.8 },
{ legend: 'Agriculture', axis: 'Scalability', value: 0.6},
{ legend: 'Agriculture', axis: 'Explainability', value: 1},
{ legend: 'Agriculture', axis: 'Integration Simplicity', value: 1},
{ legend: 'Agriculture', axis: 'Data Ingestion', value: 0.6},
{ legend: 'Agriculture', axis: 'LPWAN support', value: 1},
{ legend: 'Agriculture', axis: 'Device Management', value: 0.5},
{ legend: 'Agriculture', axis: 'Edge Ready', value: 0.1 }
],
[
{ legend: 'Track-Trace', axis: 'Rules Engine', value: 0.2},
{ legend: 'Track-Trace', axis: 'Time Series Analysis',value: 0.2},
{ legend: 'Track-Trace', axis: 'Event Processing',value: 1},
{ legend: 'Track-Trace', axis: 'Stream Processing',value: 1},
{ legend: 'Track-Trace', axis: 'Machine Learning/AI', value: 0.5},
{ legend: 'Track-Trace', axis: 'Data Visualization', value: 0.75},
{ legend: 'Track-Trace', axis: 'APIs & serverless', value: 0.6},
{ legend: 'Track-Trace', axis: 'Zero-touch-automation', value: 1},
{ legend: 'Track-Trace', axis: 'Scalability', value: 0.6},
{ legend: 'Track-Trace', axis: 'Explainability', value: 1},
{ legend: 'Track-Trace', axis: 'Integration Simplicity', value: 1},
{ legend: 'Track-Trace', axis: 'Data Ingestion', value: 0.6},
{ legend: 'Track-Trace', axis: 'LPWAN support', value: 1},
{ legend: 'Track-Trace', axis: 'Device Management', value: 0.5},
{ legend: 'Track-Trace', axis: 'Edge Ready', value: 0.2 }
],
[
{ legend: 'Edge Solution', axis: 'Rules Engine', value: 0.8},
{ legend: 'Edge Solution', axis: 'Time Series Analysis', value: 0.8},
{ legend: 'Edge Solution', axis: 'Event Processing', value: 0.8},
{ legend: 'Edge Solution', axis: 'Stream Processing', value: 1},
{ legend: 'Edge Solution', axis: 'Machine Learning/AI', value: 0.5},
{ legend: 'Edge Solution', axis: 'Data Visualization', value: 0.85},
{ legend: 'Edge Solution', axis: 'APIs & serverless', value: 0.4},
{ legend: 'Edge Solution', axis: 'Zero-touch-automation', value: 0.4},
{ legend: 'Edge Solution', axis: 'Scalability', value: 0.4},
{ legend: 'Edge Solution', axis: 'Explainability', value: 1.0},
{ legend: 'Edge Solution', axis: 'Integration Simplicity', value: 1},
{ legend: 'Edge Solution', axis: 'Data Ingestion', value: 1},
{ legend: 'Edge Solution', axis: 'LPWAN support', value: 0.7},
{ legend: 'Edge Solution', axis: 'Device Management', value: 0.25},
{ legend: 'Edge Solution', axis: 'Edge Ready', value: 1 }
],
[
{ legend: 'Oil-Gas', axis: 'Rules Engine', value: 0.8 },
{ legend: 'Oil-Gas', axis: 'Time Series Analysis', value: 1.0 },
{ legend: 'Oil-Gas', axis: 'Event Processing', value: 0.2 },
{ legend: 'Oil-Gas', axis: 'Stream Processing', value: 1.0 },
{ legend: 'Oil-Gas', axis: 'Machine Learning/AI', value: 1 },
{ legend: 'Oil-Gas', axis: 'Data Visualization', value: 1 },
{ legend: 'Oil-Gas', axis: 'APIs & serverless', value: 0.6 },
{ legend: 'Oil-Gas', axis: 'Zero-touch-automation', value: 0.4 },
{ legend: 'Oil-Gas', axis: 'Scalability', value: 0.8 },
{ legend: 'Oil-Gas', axis: 'Explainability', value: 1.0 },
{ legend: 'Oil-Gas', axis: 'Integration Simplicity', value: 1},
{ legend: 'Oil-Gas', axis: 'Data Ingestion', value: 1},
{ legend: 'Oil-Gas', axis: 'LPWAN support', value: 0.5},
{ legend: 'Oil-Gas', axis: 'Device Management', value: 0.15},
{ legend: 'Oil-Gas', axis: 'Edge Ready', value: 0.1 }
],
[
{ legend: 'Utility', axis: 'Rules Engine', value: 0.2 },
{ legend: 'Utility', axis: 'Time Series Analysis', value: 0.5 },
{ legend: 'Utility', axis: 'Event Processing', value: 0.8 },
{ legend: 'Utility', axis: 'Stream Processing', value: 0.2 },
{ legend: 'Utility', axis: 'Machine Learning/AI', value: 0.5 },
{ legend: 'Utility', axis: 'Data Visualization', value: 1 },
{ legend: 'Utility', axis: 'APIs & serverless', value: 0.4 },
{ legend: 'Utility', axis: 'Zero-touch-automation', value: 1 },
{ legend: 'Utility', axis: 'Scalability', value: 0.7 },
{ legend: 'Utility', axis: 'Explainability', value: 1 },
{ legend: 'Utility', axis: 'Integration Simplicity', value: 1},
{ legend: 'Utility', axis: 'Data Ingestion', value: 1},
{ legend: 'Utility', axis: 'LPWAN support', value: 1},
{ legend: 'Utility', axis: 'Device Management', value: 1},
{ legend: 'Utility', axis: 'Edge Ready', value: 0 }
]
];


function calculateScore () {
  return industries.map(industry => {
   var scores = {}
   const industry_total = industry.map(item => item.value).reduce((prev, next) => prev + next)
   const PENALTY =  1 / industry_total
   data.forEach(rule => {
     var score = 0
     rule.forEach(m =>{
       var industry_value = parseFloat(industry.find(x => x.axis === m.axis).value)
       var value = industry_value - m.value
       if(industry_value === 1 && value > 0.5) {
         score -= PENALTY * value
       } else {
         score += industry_value * m.value
       }        
     })
     scores[rule[0].legend] = parseFloat(score / industry_total * 100).toFixed(1)
   })
   return { legend: industry[0].legend, scores } 
  })
 }

var score = calculateScore()

//const COLORS =  ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];
var color = d3.scale.category10()
var chart = {
    type: 'bar', 
    options: {
       legend: {display: true}
      //  ,
      //  title: {
      //    display: true,
      //    text: 'Industry scores'
      // }
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
  //console.log(r, industry.scores[r])
 })
})
var i = 0
Object.keys(dd).forEach(key => {
 chart.data.datasets.push({
  label: key,
  data: dd[key],
  backgroundColor: Array(dd[key].length).fill(color(i++)) 
 })
})

