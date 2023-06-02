import React from 'react'
import Marker from '../images/location.png'

export default function Card(props) {
    return(
        <section className='cards'>
            <img src={props.item.coverImg} className="card--img" alt=''/>
            <div className='card--content'>
            <img src={Marker} alt=''/>
            <span className='card--location'>{props.item.location} </span>
            <span className='card--text'>View on Google Maps</span>
            <p className='card--place'>{props.item.placeName}</p>
            <p className='card--date'>{props.item.date}</p>
            <p className='card--description'>{props.item.description}</p>
            </div>
        </section>
    )
}