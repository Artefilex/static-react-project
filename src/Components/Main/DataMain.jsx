import {memo } from 'react'
import { GrLocation } from "react-icons/gr"
import { BsClipboardCheck } from "react-icons/bs"

const DataMain = ({travels}) => {
    
    return (
        <div className='singleDestination' data-aos="zoom-in" >
            <div className="imageDiv">
                <img src={travels.imgSrc} alt={travels.destTitle} />
            </div>
            <div className='cardInfo'>
                <h4 className='title'> {travels.destTitle}</h4>
                <span className='continent flex'>
                    <GrLocation className='icon' />
                    <span className='name'>{travels.location} </span>
                </span>
                <div className='fees flex'>
                    <div className='grade'>
                        <span> {travels.grade} <small>+1</small></span>

                    </div>
                    <div className="price">
                        <h5>{travels.fees}</h5>
                    </div>
                </div>
                <div className='desc'>
                    <p>{travels.descripton}</p>
                </div>
                <button className='btn flex'> 
                <span>DETAİLS</span>  <BsClipboardCheck className='icon' /> 
                </button>
            </div>
        </div>
    )
}

export default memo(DataMain)