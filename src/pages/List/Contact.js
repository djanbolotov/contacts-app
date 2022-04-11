import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./List.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";


const Contact = (item) => {
  const state = useSelector(state => state);
  let isFavorite = state.favorites.filter((element) => element.id == item.id);
  const [toggle, setToggle] = useState(isFavorite.length ? true : false);
  const dispatch = useDispatch();

  const handleToggle = (e) => {
    if(toggle == false){
      let contact = state.data.filter((element) => element.id == item.id);
      dispatch(addFavorite(contact[0]));
    } else {
      dispatch(deleteFavorite({id: item.id}));
    }
    setToggle(!toggle);
  };

  return (
    <div className="contact_container">
      <img className="contact_img" alt="wrong" src={item.image} />
      <div className="cont_info_container">
        <div className="title_heart">
          <h1 className="contact_title">
            {item.firstName} {item.lastName}
          </h1>
          <FaHeart
            onClick={() => handleToggle(item)}
            className={toggle ? "red_heart" : "white_heart"}
          />
        </div>
        <Link to={`/item/${item.id}`}>
          <button className="contact_button">More</button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
