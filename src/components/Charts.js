import React from 'react'
import { DashboardCharts } from './DashboardCharts'
import './css/DashboardCharts.css'
import { ChartsSecondRow } from './ChartsSecondRow'
import { ChartsThirdRow } from './ChartsThirdRow'

export const Charts = () => {
    return (
        <div>
           
            <DashboardCharts/>
           
            <ChartsSecondRow/>
            
            <ChartsThirdRow/>

        </div>
    )
}
