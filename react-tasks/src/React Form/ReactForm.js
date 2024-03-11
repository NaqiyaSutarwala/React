// React form using functional component with fields like name, email,
// contact, gender, hobbies with proper validation without using any
// third party library, hobbies is not required field rest all are
// required fields and on submit form a alert or popup should open
// and result of form data should come

import "./ReactForm.css";

const ReactForm = ({
  open,
  setOpen,
  name,
  setName,
  email,
  setEmail,
  contact,
  setContact,
  gender,
  setGender,
  hobbies,
  setHobbies,
  error,
  setError,
  errorEmail,
  setErrorEmail,
  errorContact,
  setErrorContact,
  errorGender,
  setErrorGender,
}) => {
  const handleFocusChange = () => {
    if (name === "") setError(true);
  };

  const handleEmailError = () => {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "" || !regex.test(email)) {
      setErrorEmail(true);
    }
  };

  const handleContactError = () => {
    if (contact.length < 10 || contact.length > 10) {
      setErrorContact(true);
    }
  };

  const handleGenderError = () => {
    if (gender === "") setErrorGender(true);
  };

  const handleRadioOnChange = (e) => {
    setGender(e.target.value);
    setErrorGender(false);
  };

  const handleSubmit = () => {
    if (name === "" || errorEmail || errorContact || errorGender)
      return setOpen(false);

    setOpen(true);
  };

  const handleCheckBox = (value) => {
    console.log(value);
    setHobbies((hobbies) => {
      if (hobbies.includes(value)) {
        console.log(hobbies.indexOf(value));
        let indexHobbu = hobbies.indexOf(value);
        return hobbies.filter((hobby, index) => {
          return index !== indexHobbu;
        });
      } else {
        return [...hobbies, value];
      }
    });
  };

  return (
    <div className="mainDiv">
      <h1>Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        {/* ------------Name---------------- */}
        <label> Name:</label>
        <input
          className={error ? `error` : "form-input"}
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError(false);
          }}
          onBlur={handleFocusChange}
        />
        <br></br>
        <ErrorComponent error={error}></ErrorComponent>
        {/* ------------Email---------------- */}
        <label> Email:</label>
        <input
          className="form-input"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorEmail(false);
          }}
          onBlur={handleEmailError}
        />
        <br></br>
        <ErrorComponent error={errorEmail} />
        {/* ------------Contact---------------- */}
        <label> Contact:</label>
        <input
          className="form-input"
          type="text"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
            setErrorContact(false);
          }}
          onBlur={handleContactError}
        />
        <br></br>
        <ErrorComponent error={errorContact} />
        {/* ----------Gender------------- */}
        <label> Gender:</label>
        <input
          type="radio"
          name="Gender"
          value="Male"
          className="radio"
          onChange={(e) => {
            handleRadioOnChange(e);
          }}
        />{" "}
        Male
        <input
          type="radio"
          name="Gender"
          value="Female"
          className="radio"
          onChange={(e) => {
            handleRadioOnChange(e);
          }}
        />
        Female
        <br></br>
        <ErrorComponent error={errorGender}>
          Please select valid option
        </ErrorComponent>
        {/* ----------Hobbiesssss------------- */}
        <label> hobbies:</label>
        <span>
          <input
            className="checkbox"
            type="checkbox"
            value="Book Reading"
            onFocus={handleGenderError}
            onChange={(e) => {
              handleCheckBox(e.target.value);
            }}
          />{" "}
          Book Reading
          <input
            className="checkbox"
            type="checkbox"
            value="Binge Watching"
            onFocus={handleGenderError}
            onChange={(e) => {
              handleCheckBox(e.target.value);
            }}
          />{" "}
          Binge Watching
        </span>
        {/* <input type="text" className="form-input" onFocus={handleGenderError} /> */}
      </form>
      <button
        className="button"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};

const ErrorComponent = ({ error, Children }) => {
  return (
    <>
      {error ? (
        <>
          <span style={{ color: "red" }}>
            {Children ? { Children } : "Please enter valid data"}
          </span>
          <br></br>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default ReactForm;
