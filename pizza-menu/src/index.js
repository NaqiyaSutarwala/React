import React from "react";
import ReactDom from "react-dom/client";
// import "./index.css";
import "./challenge.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

// Challenge App

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="jonas.jpeg" alt="Jonas Schmedtmann" />;
}

function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill) => {
        return (
          <Skill
            skill={skill.skill}
            emoji={skill.level}
            color={skill.color}
            key={skill.skill}
          />
        );
      })}
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  let emojiDisplay;
  if (emoji === "beginner") {
    emojiDisplay = "👶🏻";
  } else if (emoji === "advanced") {
    emojiDisplay = "💪🏻";
  } else {
    emojiDisplay = "👍🏻";
  }

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{emojiDisplay}</span>
    </div>
  );
}

// function App() {
//   return (
//     <div className="container">
//       <Header></Header>
//       <Menu></Menu>
//       <Footer></Footer>
//     </div>
//   );
// }

// function Header() {
//   return (
//     <>
//       <header className="header">
//         <h1>Fast React Pizza Company</h1>
//       </header>
//     </>
//   );
// }
// function Menu() {
//   const pizzas = pizzaData;
//   const numPizzas = pizzas.length;

//   return (
//     <main className="menu">
//       <h2> Our Menu</h2>

//       {numPizzas > 0 ? (
//         <>
//           <p>
//             Authentic italian cuisine. 6 creative dishes to choose from. All
//             from our stone oven, all organic, all delicious
//           </p>
//           <ul className="pizzas">
//             {pizzas.map((pizza) => {
//               return <Pizza pizzaObject={pizza} key={pizza.name}></Pizza>;
//             })}
//           </ul>
//         </>
//       ) : (
//         <p>We're still working on our menu. Please come back later</p>
//       )}
//     </main>
//   );
// }

// function Pizza({ pizzaObject }) {
//   return (
//     <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
//       <img src={pizzaObject.photoName} alt={pizzaObject.name} />
//       <div>
//         <h3> {pizzaObject.name} </h3>
//         <p>{pizzaObject.ingredients}</p>
//         <span>{!pizzaObject.soldOut ? pizzaObject.price : "Sold Out"}</span>
//       </div>
//     </li>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();

//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;

//   // if (hour >= openHour && hour <= closeHour) {
//   //   alert("We are currently Open");
//   // } else {
//   //   alert("ohhoo, We are Closed");
//   // }

//   return (
//     <footer className="footer">
//       {isOpen ? (
//         <Order closeHour={closeHour} openHour={openHour}></Order>
//       ) : (
//         <p>
//           We're happy to welcome you between {openHour}:00 and {closeHour}:00
//         </p>
//       )}
//     </footer>
//   );
// }

// const Order = ({ openHour, closeHour }) => {
//   return (
//     <div className="order">
//       <p>
//         We're open from {openHour} until {closeHour}:00, Come visit us or order
//         online
//       </p>
//       <button className="btn">Order</button>
//     </div>
//   );
// };

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
