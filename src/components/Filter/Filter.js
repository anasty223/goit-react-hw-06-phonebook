import React from "react";
import { changeFilter } from "../../redux/contact/action";
import { useSelector, useDispatch } from "react-redux";
import s from "./Filter.module.css";
import { getFilter } from "../../redux/contact/contact-selectors";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filter}>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default Filter;
