import React from 'react';
import './style.less'
import User from '@/components/User'

export default class fn extends React.Component{
    render() {
        return (
            <div className="boxes">
               <User/> 
            </div>
        )
    }
}