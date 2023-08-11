import "./sortList.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { AppDispatch } from "../../redux/store";
type SortlistProps = {
  list: string[];
  listName: string;
};

import {
  getCategory,
  getProductType,
  setCategory,
  setType,
} from "../../redux/features/shop/shopSlice";

const SortList = ({ list, listName }: SortlistProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const type = useSelector(getProductType);
  const category = useSelector(getCategory);

  const handleListName = () => {
    if (type !== listName) dispatch(setType(listName));
    else {
      dispatch(setType(""));
    }
    dispatch(setCategory(""));
  };
  const handleListItem = (item: string) => {
    if (category !== item) {
      dispatch(setCategory(item));
      dispatch(setType(listName));
    } else dispatch(setCategory(""));
  };

  const listItems = list.map((item) => (
    <li
      onClick={() => handleListItem(item)}
      className={`sortlist__item ${
        item === category && type === listName && "active__item"
      } `}
      key={uuidV4()}
    >
      {item}
    </li>
  ));
  return (
    <ul className="sortlist">
      <li>
        <span
          onClick={() => handleListName()}
          className={`sortlist__name  ${listName === type && "active__name"} `}
        >
          {listName}
        </span>
      </li>
      {listItems}
    </ul>
  );
};

export default SortList;
