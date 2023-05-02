import {memo } from 'react'
import { GrLocation } from "react-icons/gr"
import { BsClipboardCheck } from "react-icons/bs"

const DataMain = ({travels}) => {
     
    return (
      
      
      <div className='Main_Content-Items'  >
            <div className="imageDiv">
                <img src={travels.imgSrc} alt={travels.destTitle} />
            </div>
            <div className='cardInfo'>
                <h4 className='title'> {travels.destTitle}</h4>
                <span className='continent'>
                    <GrLocation className='icon' />
                    <span className='name'>{travels.location} </span>
                </span>
                <div className='fees'>
                    <div className='grade'>
                        <span> {travels.grade} <small>+1</small></span>
                    </div>
                    <div className="price">
                        <h5>{travels.fees} $</h5>
                    </div>
                </div>
                <div className='desc'>
                    <p>{travels.descripton}</p>
                </div>
                <button className='btn' > 
                <a href={`/${encodeURIComponent(travels.imgSrc.trim())}`} > <span>DETAİLS</span>  <BsClipboardCheck className='icon' /> </a>
                </button>
            </div>
        </div>
      
    )
}
 
export default memo(DataMain)