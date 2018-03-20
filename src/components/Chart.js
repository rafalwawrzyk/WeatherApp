import React from 'react'
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';



function average(arr){
  const average =  arr.reduce((prev,curr) => {
    return  prev+curr / arr.length
    })
  return Math.round(average) / 2;
}

const Chart = (props) => {
  return(
    <div>
      <Sparklines height={props.height} width={props.width} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>

  )
}




export default Chart;
