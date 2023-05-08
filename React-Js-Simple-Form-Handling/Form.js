import React, { useState } from "react";
import { useEffect } from "react";

const Form = () => {
  const [val, setVal] = useState({
    firstName: "",
    lastName: "",
    country: "",
    zip: "",
    age: "",
    gender: "",
    hobby: [],
    dob: "",
    description: "",
    agree: false,
  });
  useEffect(() => {
    console.log(val);
  }, [val]);
  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    if (name === "hobby") {
      setVal((prevValue) => {
        if (e.target.checked) {
          return {
            ...prevValue,
            hobby: [...prevValue.hobby, e.target.value],
          };
        } else {
          return {
            ...prevValue,
            hobby: [
              ...prevValue.hobby.filter((item) => item !== e.target.value),
            ],
          };
        }
      });
    } else if (name === "agree") {
      setVal((prevValue) => {
        return {
          ...prevValue,
          agree: !prevValue.agree,
        };
      });
    } else {
      setVal({ ...val, [name]: value });
    }
  };
  const onSubmit = (e) => {
    console.log(val);
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <form className="row g-3" onSubmit={onSubmit}>
          <div className="col-md-4">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              onChange={changeInput}
              type="text"
              className="form-control"
              name="firstName"
              value={val.firstName}
              id="firstName"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={val.lastName}
              id="lastName"
              onChange={changeInput}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <select
              className="form-select"
              onChange={changeInput}
              name="country"
              id="country"
              value={val.country}
            >
              <option>Select Country</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="india">India</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="zip" className="form-label">
              Zip
            </label>
            <input
              type="number"
              onChange={changeInput}
              className="form-control"
              id="zip"
              name="zip"
              value={val.zip}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="range"
              onChange={changeInput}
              className="form-range"
              name="age"
              id="age"
              value={val.age}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Gender</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                id="gender"
                onChange={changeInput}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                onChange={changeInput}
                value="female"
              />
              <label className="form-check-label">Female </label>
            </div>
          </div>
          <div className="col-md-4">
            <label className="form-label">Interest</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="hobby"
                onChange={changeInput}
                value="Swiming"
              />
              <label className="form-check-label">Swiming</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Painting"
                name="hobby"
                onChange={changeInput}
              />
              <label className="form-check-label">Painting </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Reading Books"
                name="hobby"
                onChange={changeInput}
              />
              <label className="form-check-label" htmlFor="Reading Books">
                Reading Books{" "}
              </label>
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="dob" className="form-label">
              DOB
            </label>
            <input
              type="date"
              onChange={changeInput}
              className="form-control"
              id="dob"
              name="dob"
              value={val.dob}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              name="description"
              value={val.description}
              onChange={changeInput}
            ></textarea>
          </div>
          <div className="col-12">
            <div className="form-check">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agree"
                  name="agree"
                  onChange={changeInput}
                />
                <label className="form-check-label" htmlFor="agree">
                  {" "}
                  Agree to terms and conditions
                </label>
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
