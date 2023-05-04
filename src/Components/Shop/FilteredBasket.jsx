import { useCallback, useEffect, useState } from "react";
import { ImBin } from "react-icons/im";
import { getBasketData } from "../../Reducer/reducer/MarketSlice";
import { useSelector, useDispatch } from "react-redux";
import { calculateAmaount } from "../../Reducer/reducer/MarketSlice";

const FilteredBasket = () => {
  const filtered = useSelector((state) => state.market.data);
  const [basket, setBasket] = useState([]);
  const [count, setCount] = useState({});
  const filteredData = filtered.filter((data) =>
    basket.find((item) => data.imgSrc === item)
  );
  const [totalAmount, setTotalAmount] = useState(0);

  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.author.activeUser);
  const increase = useCallback((imgSrc) => {
    setCount((prevState) => ({
      ...prevState,
      [imgSrc]: prevState[imgSrc] ? prevState[imgSrc] + 1 : 1,
    }));
  }, []);
  const decrease = useCallback((imgSrc) => {
    setCount((prevState) => ({
      ...prevState,
      [imgSrc]: Math.max((prevState[imgSrc] || 0) - 1, 0),
    }));
  }, []);
  useEffect(() => {
    let total = 0;
    filteredData.forEach((item) => {
      total += count[item.imgSrc]
        ? count[item.imgSrc] * item.ekstra + item.fees
        : item.fees;
    });
    dispatch(calculateAmaount(total));
    setTotalAmount(total);
  }, [count, filteredData, dispatch]);

  const handleRemove = useCallback((url) => {
    const myData = JSON.parse(localStorage.getItem("market"));
    const indexToRemove = myData.filter((item) => item !== url);
    localStorage.setItem("market", JSON.stringify(indexToRemove));
    window.location.reload();
  }, []);

  useEffect(() => {
    setBasket(getBasketData());
  }, []);

  return (
    <>
      {isActive && (
        <>
          {filteredData &&
            filteredData.map((item, index) => (
              <div key={index} className="Shop-item-main">
                <div className="Shop-item-seciton">
                  <img src={item.imgSrc} alt={item.imgSrc} />
                  <span>{item.grade}</span>
                </div>
                <div className="Shop-btn-amount">
                  <div className="Shop-button">
                    <h4>Ekstra Gün +${item.ekstra}</h4>
                    <div className="buttons">
                      <button onClick={() => decrease(item.imgSrc)}>
                        <span>-</span>
                      </button>
                      <span>{count[item.imgSrc] ? count[item.imgSrc] : 0}</span>
                      <button onClick={() => increase(item.imgSrc)}>
                        <span>+</span>
                      </button>
                    </div>
                  </div>
                  <div className="Shop-amount">
                    <h4>Total Amount </h4>
                    <h2>
                      {count[item.imgSrc]
                        ? count[item.imgSrc] * item.ekstra + item.fees
                        : item.fees}
                    </h2>
                  </div>
                </div>
                <div className="clear-button">
                  <button
                    className="btn"
                    onClick={() => handleRemove(item.imgSrc)}
                  >
                    <ImBin className="icon" />
                  </button>
                </div>
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default FilteredBasket;
