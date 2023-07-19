import React, { useEffect,  useCallback, useState  } from "react";
import { useDispatch } from "react-redux";
import { userLocation } from "../../../Reducer/reducer/AuthorSlice";


const AddressForm = () => {
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
  });

  let data = JSON.parse(localStorage.getItem("allInfo"));


  const handleChange =(e) => {
    const { name, value } = e.target;
    setForm((preveState) => ({
      ...preveState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      setForm({
        address: "",
        city: "",
      });
      dispatch(userLocation(form));
      if (form.address && form.city) {
        data[0].address = form.address;
        data[0].city = form.city;
        localStorage.setItem("allInfo", JSON.stringify(data));
      }
    }
  const handleStorageChange = useCallback((event) => {
    if (event.storageArea === localStorage) {
      window.location.reload();
    }
  }, []);
  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("allInfo", handleStorageChange);
  }, [handleStorageChange]);
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
      <button type="submit" className="btn">
        {" "}
        kaydet{" "}
      </button>
    </form>
  );
};

export default AddressForm;
