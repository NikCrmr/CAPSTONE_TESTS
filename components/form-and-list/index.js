import styled from "styled-components";

export default function FormAndList() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log(formDataObject);
    console.log({ fear: event.target.fear.checked });
  }
  return (
    <>
      <Layout>
        <h1>TITLE H1</h1>
        <h2>h2 subtitle</h2>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <StyledCheckbox htmlFor="fear">
            FEAR
            <StyledCheckboxCheck
              type="checkbox"
              name="fear"
              id="fear"
              onClick={() => console.log("Click")}
            />
          </StyledCheckbox>
          <StyledCheckbox htmlFor="fear">
            ENJOYMENT
            <input type="checkbox" name="enjoyment" id="enjoyment" />
          </StyledCheckbox>
          <StyledCheckbox htmlFor="fear">
            DISGUST
            <input type="checkbox" name="disgust" id="disgust" />
          </StyledCheckbox>
          <StyledCheckbox htmlFor="fear">
            SADNESS
            <input type="checkbox" name="sadness" id="sadness" />
          </StyledCheckbox>
          <br />
          <br />
          <br />
          <br />
          <button type="submit">SUMBIT</button>
        </form>
      </Layout>
    </>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

const StyledCheckbox = styled.label`
  border: 1px solid black;
  border-radius: 12px;
  margin: 0.5rem;
  padding: 1.5rem;
`;

const StyledCheckboxCheck = styled.input`
  display: none;
`;

/*
import { useState } from “react”;
import { nanoid } from “nanoid”;
import styled from “styled-components”;
const styledCheckboxListItem = styled.li`
  border: solid white 1px;
  border-radius: 5px;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
const styledInput = styled.input`
  margin: 0;
  padding: 0;
  position: absolute;
  height: 200%;
  width: 120px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  background-color: red;
  opacity: 0.2;
  cursor: pointer;
`;
export default function FormAndList() {
  const [rangeValue, setRangeValue] = useState(127.5);
  const [submittedRangeValues, setSubmittedRangeValues] = useState([]);
  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    // console.log(rangeValue);
  };
  function onSubmit(event) {
    event.preventDefault();
    const submittedForm = {
      id: nanoid(),
      slider: rangeValue,
      date: new Date().toLocaleString(),
    };
    setSubmittedRangeValues([...submittedRangeValues, submittedForm]);
    console.log([...submittedRangeValues, submittedForm]);
  }
  return (
    <div
      style={{
        display: “flex”,
        justifyContent: “start”,
        alignItems: “center”,
        height: “100vh”,
        flexDirection: “column”,
        backgroundColor: “black”,
        color: “white”,
      }}
    >
      <h1>mood tracker</h1>
      <form onSubmit={onSubmit}>
        <ul style={{ listStyle: “none”, display: “flex”, gap: “10px” }}>
          <li
            style={{
              border: “solid white 1px”,
              borderRadius: “5px”,
              overflow: “hidden”,
              padding: “0”,
              margin: “0",
            }}
          >
            <label htmlFor=“anger” style={{ position: “relative” }}>
              <input
                style={{
                  margin: “0”,
                  padding: “0",
                  position: “absolute”,
                  height: “200%“,
                  width: “120px”,
                  webkitAppearance: “none”,
                  mozAppearance: “none”,
                  appearance: “none”,
                  outline: “none”,
                  backgroundColor: “red”,
                  opacity: “0.2”,
                  cursor: “pointer”,
                }}
                type=“checkbox”
                name=“anger”
              />
              <span>anger</span>
            </label>
          </li>
          <li
            style={{
              border: “solid white 1px”,
              borderRadius: “5px”,
              overflow: “hidden”,
              padding: “0",
              margin: “0”,
            }}
          >
            <label htmlFor=“enjoyment” style={{ position: “relative” }}>
              enjoyment
              <input
                style={{
                  margin: “0",
                  padding: “0”,
                  position: “absolute”,
                  height: “200%“,
                  width: “120px”,
                  webkitAppearance: “none”,
                  mozAppearance: “none”,
                  appearance: “none”,
                  outline: “none”,
                  backgroundColor: “red”,
                  opacity: “0.2”,
                  cursor: “pointer”,
                }}
                type=“checkbox”
                name=“enjoyment”
                onClick={() => console.log(“CLICK”)}
              />
            </label>
          </li>
          <li
            style={{
              border: “solid white 1px”,
              borderRadius: “5px”,
              overflow: “hidden”,
              padding: “0”,
              margin: “0",
            }}
          >
            <label htmlFor=“fear” style={{ position: “relative” }}>
              fear
              <input
                style={{
                  margin: “0”,
                  padding: “0",
                  position: “absolute”,
                  height: “200%“,
                  width: “120px”,
                  webkitAppearance: “none”,
                  mozAppearance: “none”,
                  appearance: “none”,
                  outline: “none”,
                  backgroundColor: “red”,
                  opacity: “0.2”,
                  cursor: “pointer”,
                }}
                type=“checkbox”
                name=“fear”
              />
            </label>
          </li>
          <li
            style={{
              border: “solid white 1px”,
              borderRadius: “5px”,
              overflow: “hidden”,
              padding: “0",
              margin: “0”,
            }}
          >
            <label htmlFor=“disgust” style={{ position: “relative” }}>
              disgust
              <input
                style={{
                  margin: “0",
                  padding: “0”,
                  position: “absolute”,
                  height: “200%“,
                  width: “120px”,
                  webkitAppearance: “none”,
                  mozAppearance: “none”,
                  appearance: “none”,
                  outline: “none”,
                  backgroundColor: “red”,
                  opacity: “0.2”,
                  cursor: “pointer”,
                }}
                type=“checkbox”
                name=“disgust”
              />
            </label>
          </li>
          <li
            style={{
              border: “solid white 1px”,
              borderRadius: “5px”,
              overflow: “hidden”,
              padding: “0",
              margin: “0”,
            }}
          >
            <label htmlFor=“sadness” style={{ position: “relative” }}>
              sadness
              <input
                style={{
                  margin: “0",
                  padding: “0”,
                  position: “absolute”,
                  height: “200%“,
                  width: “120px”,
                  webkitAppearance: “none”,
                  mozAppearance: “none”,
                  appearance: “none”,
                  outline: “none”,
                  backgroundColor: “red”,
                  opacity: “0.2”,
                  cursor: “pointer”,
                }}
                type=“checkbox”
                name=“sadness”
              />
            </label>
          </li>
        </ul>
        <input
          type=“range”
          name=“slider”
          value={rangeValue}
          onChange={handleRangeChange}
          min={0}
          max={255}
        ></input>
        <button type=“submit”>save</button>
      </form>
      <ul>
        {submittedRangeValues.map((submittedRangeValue, index) => {
          return (
            <li key={submittedRangeValue.id}>
              {index + 1}: {submittedRangeValue.slider} (
              {submittedRangeValue.date})
            </li>
          );
        })}
      </ul>
    </div>
  );
}
*/
