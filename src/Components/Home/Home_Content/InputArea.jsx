import { useEffect, useState, useCallback, memo } from "react";
import { CiLocationOn } from "react-icons/ci";
import { HiFilter } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { addData } from "../../../Reducer/reducer/DataSlice";

const InputArea = () => {
  const filteredData = useSelector((state) => state.data.filtered);
  const filtered = useSelector((state) => state.data.filter);
  const dispatch = useDispatch();

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [range, setRange] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleLocation = useCallback((e) => setDestination(e.target.value), []);
  const handleDate = useCallback((e) => setDate(e.target.value), []);
  const handleRange = useCallback((e) => setRange(e.target.value), []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (range || date) {
        const title = destination.toString().toLocaleLowerCase("TR");
        const action = [{ title, range, date }];
        dispatch(addData(action));
        setDate("");
        setDestination("");
        setRange("");

        if (filtered.length !== 0 && filteredData.length === 0) {
          setShowAlert(true);
        }
      }
    },
    [date, range, destination, dispatch, filtered, filteredData]
  );

  useEffect(() => {
    let setTime;
    if (showAlert === true) {
      setTime = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
    return () => clearTimeout(setTime);
  }, [showAlert]);

  return (
    <>
      <form onSubmit={handleSubmit} data-aos="fade-up" className="cardDiv grid">
        <div className="destinationInput">
          <label htmlFor="city">Search Your destination: </label>
          <div className="input flex">
            <input
              type="text"
              maxLength={20}
              value={destination}
              onChange={handleLocation}
              placeholder="Enter A country"
            />
            <CiLocationOn className="icon" />
          </div>
        </div>
        <div className="dateInput">
          <label htmlFor="date">Select Your Date: </label>
          <div className="input flex">
            <input type="date" value={date} onChange={handleDate} />
          </div>
        </div>
        <div className="priceInput">
          <div className="label_total flex">
            <label htmlFor="price" className="total">
              Max Price :
            </label>
            <h3 className="total"> $ {range}</h3>
          </div>
          <div className="input flex">
            <input
              type="number"
              value={range}
              maxLength={20}
              onChange={handleRange}
              max={10000}
              min={0}
            />
          </div>
        </div>

        <button type="submit" className="searchOption flex">
          <HiFilter className="icon" />
          <span>More Filter</span>
        </button>
      </form>
      <div data-aos="fade-down" style={{ display: "block", height: "4rem" }}>
        {showAlert && (
          <div className="danger" data-aos="fade-down">
            {" "}
            <h3> Aradığınız Sonuç Bulunamamıştır</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(InputArea);
