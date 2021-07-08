import React, { useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Checkbox, Grid, Typography } from "@material-ui/core";
import { Container } from "../DragandDrop/Container";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

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

  const handleCheckboxChange = (event, index, id) => {
    answerOptions[index].isChecked = !answerOptions[index].isChecked;
    if (answerOptions[index].options) {
      answerOptions[index].options[id].isChecked = !answerOptions[index]
        .options[id].isChecked;
    }

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
        <Typography variant="h6" align="justify">
          {currentQuestion?.label}
        </Typography>
        {currentQuestion?.label2 && (
          <Typography variant="h6" align="justify">
            {currentQuestion?.label2}
          </Typography>
        )}
        {currentQuestion?.label3 && (
          <Typography variant="h6" align="justify">
            {currentQuestion?.label3}
          </Typography>
        )}
      </FormLabel>
      {singleSelect &&
        answerOptions?.map((item, index) => {
          return (
            <RadioGroup
              aria-label="answerOptions"
              name="answerOptions"
              value={Number(checkBox[questionNumber]?.value)}
              onChange={(e) => handleChange(e, index, item)}
              className="ml-5"
            >
              <FormControlLabel
                value={item?.value}
                control={<Radio color="primary" />}
                label={item?.label}
              />
            </RadioGroup>
          );
        })}

      {multiSelect && (
        <Grid container xs={12}>
          {answerOptions?.map((item, index) => {
            return (
              <Grid
                item
                container
                lg={currentQuestion?.twoColumns ? 6 : 12}
                xs={12}
                direction={item?.options && "column"}
              >
                <FormControlLabel
                  value={value}
                  className="ml-5"
                  control={
                    !item?.options ? (
                      <Checkbox
                        checked={item?.isChecked}
                        onChange={(e) => handleCheckboxChange(e, index)}
                        name={item?.label}
                        color="primary"
                      />
                    ) : (
                      <Checkbox
                        checked={true}
                        // onChange={(e) => handleCheckboxChange(e, index)}
                        name={item?.label}
                        color="primary"
                        checkedIcon={<ArrowRightIcon />}
                      />
                    )
                  }
                  label={item?.label}
                ></FormControlLabel>
                {currentQuestion?.icons && (
                  <img src={item?.icon} height={70} width={100} />
                )}
                {item?.options &&
                  item?.options?.map((value, id) => {
                    return (
                      <FormControlLabel
                        value={value}
                        style={{ marginLeft: 100 }}
                        control={
                          <Checkbox
                            checked={value?.isChecked}
                            onChange={(e) => handleCheckboxChange(e, index, id)}
                            name={value?.label}
                            color="primary"
                          />
                        }
                        label={value?.label}
                      ></FormControlLabel>
                    );
                  })}
              </Grid>
            );
          })}

          {questionNumber === 8 && (
            <Typography variant="h6">
              Note :- Person who want to finance their car partially, pls select
              cash option only for correct budgeting.
            </Typography>
          )}
        </Grid>
      )}

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
