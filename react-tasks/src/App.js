import Modal from "./React Form/Modal";
import ReactForm from "./React Form/ReactForm";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);

  // Errors
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorContact, setErrorContact] = useState(false);
  const [errorGender, setErrorGender] = useState(false);
  // {
  //   name:
  //   contact
  //   email
  // }

// const x = {
//   name : {
//     value  : "kevin",
//     isError  : false,
//     message : "please enter proper value"
//   },
//   email0 : {
//     value  : "kevin",
//     isError  : false,
//     message : "please enter proper value"
//   },

// }


// const onChangeFunction = (e) =>{
//   const {name , value} = e.target;
//   setState((prev    )=>{
//     return  {
//       ...prev,

//       [name] : {
//        ...pre.name
//         isError:  true,
//         message  : prev[name].value,

//       }
//     }
//   })
// }
  return (
    <>
      {open ? (
        <Modal
          name={name}
          contact={contact}
          email={email}
          gender={gender}
          hobbies={hobbies}
        ></Modal>
      ) : (
        <ReactForm
          open={open}
          setOpen={setOpen}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          contact={contact}
          setContact={setContact}
          gender={gender}
          setGender={setGender}
          hobbies={hobbies}
          setHobbies={setHobbies}
          error={error}
          setError={setError}
          errorEmail={errorEmail}
          setErrorEmail={setErrorEmail}
          errorContact={errorContact}
          setErrorContact={setErrorContact}
          errorGender={errorGender}
          setErrorGender={setErrorGender}
        ></ReactForm>
      )}
    </>
  );
}

export default App;
