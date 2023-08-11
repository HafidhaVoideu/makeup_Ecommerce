import { useDispatch } from "react-redux";
import { BRANDS, RATINGS, TAGS } from "../../data/data";
import "./sort.css";
import { useState, useEffect } from "react";
import { AppDispatch } from "../../redux/store";
import {
  setBrand,
  setRating,
  setTag,
} from "../../redux/features/shop/shopSlice";

type sortProps = {
  sortName: string;

  option: string | number;
};

const Sort = ({ sortName, option }: sortProps) => {
  const [selectSort, setSelecetSort] = useState<string | number>(option);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (sortName === "brands") dispatch(setBrand(selectSort));
    else if (sortName === "tags") dispatch(setTag(selectSort));
    else dispatch(setRating(selectSort));
  }, [selectSort]);

  let sortOptions: any[];

  if (sortName === "brands") sortOptions = BRANDS;
  else if (sortName === "tags") sortOptions = TAGS;
  else sortOptions = RATINGS;

  const options = sortOptions?.map((op, index) => {
    return (
      <option value={op?.brand || op?.tag || op?.rating} key={index}>
        {op?.brand || op?.tag || op?.rating}
      </option>
    );
  });
  return (
    <div className="sort">
      <label htmlFor="select-menu">{sortName}</label>
      <select
        value={selectSort}
        onChange={(e) => setSelecetSort(e.target.value)}
        id="select-menu"
      >
        <option></option>
        {options}
      </select>
    </div>
  );
};

export default Sort;
