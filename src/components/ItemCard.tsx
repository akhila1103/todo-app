import "../assets/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";

const ItemCard = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent) => {
    let inputValue = (event.target as HTMLInputElement).value;
    setInput(inputValue);
  };

  const addTask = () => {
    setItems((prevItems) => {
      return [...prevItems, input];
    });
    setInput("");
  };


  return (
    <div className="inner-div">
      <div className="header">
        <p>Todo List</p>
      </div>
      <div className="content">
        <div className="form-input">
          <input
            type="text"
            id="taskInput"
            placeholder="Add a task"
            onChange={handleChange}
            value = {input}
          />
          <button
            type="button"
            className="btn btn-border-radius-10"
            style={{ backgroundColor: "blue", color: "white" }}
            onClick={ addTask }
          >
            ADD
          </button>
        </div>
        <div className="tast-list">
          {items.map((item) => {
            return (
              <div className="task-card" key={item}>
                <div className="task-content">
                  <input
                    style={{
                      fontSize: "18px",
                      borderRadius: "0",
                      position: "relative",
                    }}
                    className="form-check-input shadow-none"
                    type="checkbox"
                    defaultChecked= {true}
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label">{ item }</label>
                  <div className="icons">
                    <button type="button" className="icon-btn" onClick={ () => {
                        setItems((prevValue) => {
                            return prevValue.filter(it => it!=item);
                        })
                    } }>
                      <FontAwesomeIcon
                        className="h3"
                        style={{ color: "blue" }}
                        icon={faCircleXmark}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
