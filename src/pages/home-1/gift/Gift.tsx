//** Imports ****************** */
import React, { useState } from "react";
import gift from "../../../assets/gift.png";
import "./gift.css";

//** Services Compoenent ****************** */

const Gift = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="gift__offer">
      <div className="gift__content">
        <h1 className="gift__offer__title">We have something for you ! </h1>
        <p className="gift__offer__des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          similique ex, enim temporibus velit fugiat autem debitis quasi rem
          consequatur! Perspiciatis ipsam aliquam
        </p>

        <form onSubmit={handleSubmit} className="gift__form">
          <input
            className="gift__form__input"
            type="email"
            name="email-address"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="gift__form__btn     btn--clear" type="submit">
            Subscribe{" "}
          </button>
        </form>
      </div>
      <img className="gift__img" src={gift} alt="gift" />
    </div>
  );
};

export default Gift;
