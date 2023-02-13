import React from 'react'
import { TrendData } from '../../data/trendData'

const TrendCard = () => {
  return (
    <div className="TrendCard">
        <h3>Trends For You</h3>
        {TrendData.map((trend)=>{
            return(
                <div className="trend">
                    <span>#{trend.name}</span>
                    <span>{trend.shares}</span>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard