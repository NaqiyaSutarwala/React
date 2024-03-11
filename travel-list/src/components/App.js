import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
// eslint-disable-next-line
import FlashCard from "../flashCards";
import Accordion from "../accordian/accordian";
import TipCalculator from "../Tip Calculator/TipCalculator";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => {
      return [...items, item];
    });
  };

  const handleDeleteItem = (id) => {
    setItems((items) => {
      return items.filter((item) => {
        return id !== item.id;
      });
    });
  };

  const handleToggleItem = (id) => {
    setItems((items) => {
      return items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      });
    });
  };

  const handleDeleteData = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items??!"
    );

    confirmed && setItems((items) => items.splice(0));
  };

  // return (
  //   <div className="app">
  //     <Logo></Logo>
  //     <Form onAddItems={handleAddItems} />
  //     <PackingList
  //       items={items}
  //       onDeleteItem={handleDeleteItem}
  //       onToggleItem={handleToggleItem}
  //       onDeleteData={handleDeleteData}
  //     />
  //     <Stats items={items} />
  //   </div>
  // );
  // return <FlashCard></FlashCard>;
  // return <Accordion></Accordion>;
  return <TipCalculator></TipCalculator>;
}
