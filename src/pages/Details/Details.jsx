import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Form1 } from "./Form";
import { FaHeart } from "react-icons/fa";
import "./Form.css";
import img from "../../assets/images/image.png";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();
  const state = useSelector(state => state);
  let isFavorite = state.favorites.filter((item) => item.id == id);
  const [toggle, setToggle] = useState(isFavorite.length ? true : false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    if(toggle === false){
      let contact = state.data.filter((item) => item.id == id);
      dispatch(addFavorite(contact[0]));
    } else {
      dispatch(deleteFavorite({id: id}));
    }
    setToggle(!toggle);
  };

  return (
    <>
      <Header />
      <div className="item_container">
        <div className="image_heart">
          <img src={img} alt="wrong" />
          <FaHeart
            onClick={() => handleToggle()}
            className={toggle ?  "redHeart" : "whiteHeart"}
          />
        </div>
        <Form1 />
      </div>
    </>
  );
};

export default Details;
