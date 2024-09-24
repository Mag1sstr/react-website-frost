import { useEffect, useState } from "react";
import "./DropdownCategory.css";
import dropdownIcon from "../../images/drop-icon.png";

export default function DropdownCategory(props) {
  const [dropdown, setDropdown] = useState(false);
  let [items, setItems] = useState(props.items);
  let [category, setCategory] = useState(null);
  useEffect(() => {
    setItems([{id: 'all', name: props.title}, ...props.items]);
    setCategory(props.title);
  }, [props.items]);

  let num = 0;
  props.items.forEach((el) => {
    if (el.name == props.title) {
      num++;
    }
  });
  return (
    <div className="parent">
      <p
        className="item"
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        {/* {category.length == 0 ? props.title : category} */}
        {category ?? props.title}
        <img className="item__img" src={dropdownIcon} alt="" />
      </p>
      <div className={dropdown ? "dropdown active" : "dropdown"}>
        {items.map((el) => {
          return (
            <div
              key={el.id}
              className="item"
              onClick={() => {
                setCategory(el.name);
                setDropdown(!dropdown);
                props.onChange(el.id);
              }}
            >
              {el.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
