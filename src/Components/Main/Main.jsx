import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearFilter } from '../../Reducer/reducer/DataSlice'
import "./main.css"
import { Data } from "../../Assests/data"
import DataMain from './DataMain'
import Aos from 'aos'
import "aos/dist/aos.css"




const Main = () => {

      const [filter, setFilter] = useState(false)
      const filtered = useSelector(state => state.data.filtered)

      const dispatch = useDispatch()
      const handleClearFilter = () => {
            dispatch(clearFilter());
      };

      useEffect(() => {
            if (filtered.length !== 0) {
                  setFilter(true)
            } else {
                  setFilter(false)
            }
      }, [filtered])

      useEffect(() => {
            Aos.init({ duration: 2000 })
      }, [])

      return (
            <section className='Main container'>
                  <div data-aos="fade-down" className='Main_Section_Title'>
                        <h3 className='title'>
                              Most visited destinations
                        </h3>
                        {
                              filter && <button className='btn' onClick={handleClearFilter} > Clear Filter </button>
                        }
                  </div>
                  <div className='Main_Section_Content grid'>
                        {
                              filter && filtered.map((travel, index) => (<DataMain key={index} travels={travel} />))
                        }
                        {
                              !filter && Data.map((travel) => (
                                    <DataMain key={travel.id} travels={travel} />
                              ))
                        }
                  </div>
            </section>
      )
}

export default Main