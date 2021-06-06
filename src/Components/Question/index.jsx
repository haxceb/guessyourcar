import React, { useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Checkbox, Typography } from "@material-ui/core";
import { Container } from "../DragandDrop/Container";

export default function Index({
  currentQuestion,
  questionNumber,
  checkBox,
  setCheckBox,
}) {
  const [value, setValue] = useState("");

  const {
    answerOptions,
    multiSelect,
    singleSelect,
    dragAndDrop,
  } = currentQuestion;

  const handleChange = (event, index, item) => {
    let newObject = checkBox[questionNumber];
    newObject = {
      label: item?.label,
      [item?.label]: event.target.checked,
      value: event.target.value,
    };
    console.log({ checkBox });
    setCheckBox({
      ...checkBox,
      [questionNumber]: newObject,
    });
  };

  const handleCheckboxChange = (event, index) => {
    answerOptions[index].isChecked = !answerOptions[index].isChecked;
    let newObject = checkBox[questionNumber];
    newObject = {
      ...newObject,
      [event.target.name]: event.target.checked,
    };
    console.log({ checkBox });
    setCheckBox({
      ...checkBox,
      [questionNumber]: newObject,
    });
  };

  return (
    <FormControl component="fieldset">
      <FormLabel style={{ color: "black" }}>
        <Typography variant="h6" className="in-down" align="justify">
          {currentQuestion?.label}
        </Typography>
      </FormLabel>
      {singleSelect &&
        answerOptions?.map((item, index) => {
          return (
            <RadioGroup
              aria-label="answerOptions"
              name="answerOptions"
              value={Number(checkBox[questionNumber]?.value)}
              onChange={(e) => handleChange(e, index, item)}
              className="in-left"
            >
              <FormControlLabel
                value={item?.value}
                control={<Radio color="primary" />}
                label={item?.label}
              />
            </RadioGroup>
          );
        })}
      {multiSelect &&
        answerOptions?.map((item, index) => {
          return (
            <FormControlLabel
              value={value}
              className="in-down"
              control={
                <Checkbox
                  checked={item?.isChecked}
                  onChange={(e) => handleCheckboxChange(e, index)}
                  name={item?.label}
                  className="in-left"
                  color="primary"
                />
              }
              label={item?.label}
            />
          );
        })}

      {dragAndDrop && (
        <Container
          answerOptions={answerOptions}
          checkBox={checkBox}
          setCheckBox={setCheckBox}
          questionNumber={questionNumber}
        />
      )}
    </FormControl>
  );
}
