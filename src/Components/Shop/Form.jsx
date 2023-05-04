import { memo, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { userCardInfo } from "../../Reducer/reducer/AuthorSlice";
import { addAllInfoToLocalStorage } from "../../Reducer/reducer/AuthorSlice";
import { useEffect, useState } from "react";
const Form = () => {
  const [information, setInformation] = useState(false);
  const dispatch = useDispatch();

  const city = [
    "Adana",
    "Adiyaman",
    "Afyon",
    "Agri",
    "Aksaray",
    "Amasya",
    "Ankara",
    "Antalya",
    "Ardahan",
    "Artvin",
    "Aydin",
    "Balikesir",
    "Bartin",
    "Batman",
    "Bayburt",
    "Bilecik",
    "Bingol",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Canakkale",
    "Cankiri",
    "Corum",
    "Denizli",
    "Diyarbakir",
    "Duzce",
    "Edirne",
    "Elazig",
    "Erzincan",
    "Erzurum",
    "Eskisehir",
    "Gaziantep",
    "Giresun",
    "Gumushane",
    "Hakkari",
    "Hatay",
    "Igdir",
    "Isparta",
    "Istanbul",
    "Izmir",
    "Kahramanmaras",
    "Karabuk",
    "Karaman",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kilis",
    "Kirikkale",
    "Kirklareli",
    "Kirsehir",
    "Kocaeli",
    "Konya",
    "Kutahya",
    "Malatya",
    "Manisa",
    "Mardin",
    "Mersin",
    "Mugla",
    "Mus",
    "Nevsehir",
    "Nigde",
    "Ordu",
    "Osmaniye",
    "Rize",
    "Sakarya",
    "Samsun",
    "Sanliurfa",
    "Siirt",
    "Sinop",
    "Sirnak",
    "Sivas",
    "Tekirdag",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Usak",
    "Van",
    "Yalova",
    "Yozgat",
    "Zonguldak",
  ];
  const [form, setForm] = useState({
    address: "",
    city: "",
    cardName: "",
    cardNumber: "",
    date: "",
    cvv: "",
  });
  useEffect(() => {
    if (
      localStorage.getItem("allInfo") &&
      localStorage.getItem("allInfo").length > 0
    ) {
      setInformation(true);
    } else {
      setInformation(false);
    }
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setForm((preveState) => ({
      ...preveState,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useMemo(
    (e) => {
      e.preventDefault();
      setForm({
        address: "",
        city: "",
        cardName: "",
        cardNumber: "",
        date: "",
        cvv: "",
      });
      dispatch(userCardInfo(form));
      addAllInfoToLocalStorage(form);
    },
    [dispatch, form]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-div">
        <h2>Adress Bilgileri :</h2>
        <div className="input-div">
          <label htmlFor="adress"> Açık Adres:</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div className="input-div">
          <label htmlFor="city"> Şehir: </label>
          <select name="city" value={form.city} onChange={handleChange}>
            <option value=""> </option>
            {city.map((item, i) => (
              <option key={i} value={item}>
                {" "}
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-div">
        <h2>Kart Bilgileri :</h2>
        <div className="input-div">
          <label htmlFor="cart">Kart üzerindeki isim </label>
          <input
            name="cardName"
            type="text"
            value={form.cardName}
            onChange={handleChange}
          />
        </div>
        <div className="input-div">
          <label htmlFor="cartInfo"> Kart Numarası </label>
          <input
            type="text"
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
          />
        </div>

        <div className="input-date">
          <div className="input-div">
            <label htmlFor="date">Sona Erme Tarihi </label>
            <input
              type="text"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
          </div>

          <div className="input-div">
            <label htmlFor="cvv">CVV </label>
            <input
              name="cvv"
              type="text"
              value={form.cvv}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn">
        {" "}
        kaydet{" "}
      </button>
    </form>
  );
};

export default memo(Form);
