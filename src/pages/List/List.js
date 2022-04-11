import React from "react";
import Header from "../../components/Header/Header";
import { FaSortAlphaDown, FaSortAlphaUpAlt, FaHeart } from "react-icons/fa";
import "./List.css";
import { useEffect } from "react";
import Contact from "./Contact";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  fetchData,
  searchContact,
  sortByAlphabeticalAsc,
  sortByAlphabeticalDesc,
} from "../../redux/actions";

const ContactList = () => {
  const state = useSelector((state) => state);
  const favList = useSelector(state => state.favorites);
  const dispatch = useDispatch();
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const loadedData = localStorage.getItem("LocalState");
    if (!loadedData) {
      dispatch(fetchData());
    }
  }, []);

  const handleShow = () => {
    setFav(!fav);
    if (favList.length == 0) { 
      alert("There is no favorites!")
      setFav(!fav);
    }
  };

  const handleCLickAsc = () => {
    dispatch(sortByAlphabeticalAsc());
  };

  const handleCLickDesc = () => {
    dispatch(sortByAlphabeticalDesc());
  };

  const handleSearch = (event) => {
    dispatch(searchContact(event));
  };

  const handleBlue = () => {
    dispatch(fetchData());
  };

  let dataList = fav && favList.length ? favList : state.data;

  return state.loading ? (
    <h1>Loading...</h1>
  ) : state.error ? (
    <h1>{state.error}</h1>
  ) : (
    <div>
      <Header />
      <div className="main_container">
        <div className="search_sort">
          <input
            onBlur={(event) => handleBlue(event.target.value)}
            onChange={(event) => handleSearch(event.target.value)}
            className="search_input"
            placeholder="Type to search..."
          />
          <div>
            <FaHeart onClick={handleShow} className="heart_filter pointer" />
            <FaSortAlphaDown
              onClick={handleCLickAsc}
              className="sort_red pointer"
            />
            <FaSortAlphaUpAlt
              onClick={handleCLickDesc}
              className="sort_black pointer"
            />
          </div>
        </div>

        <div className="contacts_container">
          {dataList.map((item) => (
            <Contact
              key={item.id}
              id={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              city={item.city}
              country={item.country}
              email={item.email}
              phoneNumber={item.phoneNumber}
              website={item.website}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
