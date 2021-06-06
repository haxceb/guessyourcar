import React, { useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Autocomplete from "@material-ui/lab/Autocomplete";

import {
  Checkbox,
  FormHelperText,
  Input,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

export default function MinMaxQuestion({
  currentQuestion,
  checkBox,
  setCheckBox,
  questionNumber,
}) {
  const [minValue, setMinValue] = useState(
    checkBox?.[questionNumber]?.minCashBudget
      ? checkBox?.[questionNumber]?.minCashBudget
      : null
  );
  const [inputMinValue, setInputMinValue] = useState(
    checkBox?.[questionNumber]?.minCashBudget
  );
  const [maxValue, setMaxValue] = useState(
    checkBox?.[questionNumber]?.maxCashBudget
      ? checkBox?.[questionNumber]?.maxCashBudget
      : null
  );
  const [inputMaxValue, setInputMaxValue] = useState(
    checkBox?.[questionNumber]?.maxCashBudget
  );

  const [minLoanValue, setMinLoanValue] = useState(
    checkBox?.[questionNumber]?.minLoanValue
      ? checkBox?.[questionNumber]?.minLoanValue
      : null
  );
  const [inputMinLoanValue, setInputMinLoanValue] = useState(
    checkBox?.[questionNumber]?.minLoanValue
  );

  const [minDownValue, setMinDownValue] = useState(
    checkBox?.[questionNumber]?.minDownPayment
      ? checkBox?.[questionNumber]?.minDownPayment
      : null
  );
  const [inputMinDownValue, setInputMinDownValue] = useState(
    checkBox?.[questionNumber]?.minDownPayment
  );

  useEffect(() => {
    setCheckBox({
      ...checkBox,
      [questionNumber]: {
        minCashBudget: minValue ? minValue : inputMinValue,
        maxCashBudget: maxValue ? maxValue : inputMaxValue,
        minLoanValue: minLoanValue ? minLoanValue : inputMinLoanValue,
        minDownPayment: minDownValue ? minDownValue : inputMinLoanValue,
      },
    });
    console.log({ checkBox });
  }, [
    minValue,
    inputMinValue,
    maxValue,
    inputMaxValue,
    minLoanValue,
    inputMinLoanValue,
    minDownValue,
    inputMinDownValue,
  ]);

  return (
    <FormControl component="fieldset">
      {currentQuestion?.minMax && (
        <FormLabel style={{ color: "black" }} className="d-flex flex-wrap">
          <Typography className="in-down" variant="h6" align="justify">
            {currentQuestion?.labelMinimum}
          </Typography>
          <FormControl className="mr-3 ml-3" style={{ minWidth: 120 }}>
            <Autocomplete
              id="combo-box-demo"
              options={currentQuestion?.minimumOptions}
              className="in-down"
              getOptionLabel={(option) => option.title}
              style={{ width: 120 }}
              value={
                checkBox?.[questionNumber]?.minCashBudget
              }
              onChange={(event, newValue) => {
                setMinValue(newValue?.title);
              }}
              inputValue={
                checkBox?.[questionNumber]?.minCashBudget
              }
              onInputChange={(event, newInputValue) => {
                setInputMinValue(newInputValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <FormHelperText>Minimum Amount</FormHelperText>
          </FormControl>
          <Typography variant="h6" className="in-down" align="justify">
            {currentQuestion?.labelMaximum}
          </Typography>

          <FormControl className="mr-3 ml-3" style={{ minWidth: 120 }}>
            <Autocomplete
              id="combo-box-demo"
              options={currentQuestion?.minimumOptions}
              getOptionLabel={(option) => option.title}
              className="in-down"
              style={{ width: 120 }}
              value={
                checkBox?.[questionNumber]?.maxCashBudget
              }
              onChange={(event, newValue) => {
                console.log({ newValue });
                setMaxValue(newValue?.title);
              }}
              inputValue={
                checkBox?.[questionNumber]?.maxCashBudget
              }
              onInputChange={(event, newInputValue) => {
                setInputMaxValue(newInputValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <FormHelperText>Maximum Amount</FormHelperText>
          </FormControl>
        </FormLabel>
      )}

      {currentQuestion?.loanPayment && (
        <FormLabel style={{ color: "black" }} className="d-flex flex-wrap">
          <Typography className="in-down" variant="h6" align="justify">
            {currentQuestion?.loanLabel}
          </Typography>
          <FormControl className="mr-3 ml-3" style={{ minWidth: 120 }}>
            <Autocomplete
              id="combo-box-demo"
              className="in-down"
              options={currentQuestion?.loanYears}
              getOptionLabel={(option) => option.title}
              style={{ width: 150 }}
              value={checkBox?.[questionNumber]?.minLoanValue}
              onChange={(event, newValue) => {
                setMinLoanValue(newValue?.title);
              }}
              inputValue={
                checkBox?.[questionNumber]?.minLoanValue
              }
              onInputChange={(event, newInputValue) => {
                setInputMinLoanValue(newInputValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <FormHelperText>Loan Minimum Amount</FormHelperText>
          </FormControl>
        </FormLabel>
      )}

      {currentQuestion?.downPayment && (
        <FormLabel style={{ color: "black" }} className="d-flex flex-wrap">
          <Typography className="in-down" variant="h6" align="justify">
            {currentQuestion?.downPaymentLabel}
          </Typography>
          <FormControl className="mr-3 ml-3" style={{ minWidth: 120 }}>
            <Autocomplete
              id="combo-box-demo"
              className="in-down"
              options={currentQuestion?.downPaymentOptions}
              getOptionLabel={(option) => option?.title}
              value={
                checkBox?.[questionNumber]?.minDownPayment
              }
              onChange={(event, newValue) => {
                setMinDownValue(newValue?.title);
              }}
              inputValue={
                checkBox?.[questionNumber]?.minDownPayment
              }
              onInputChange={(event, newInputValue) => {
                setInputMinDownValue(newInputValue);
              }}
              style={{ width: 150 }}
              renderInput={(params) => <TextField {...params} />}
            />
            <FormHelperText>Pyament Minimum Amount</FormHelperText>
          </FormControl>
        </FormLabel>
      )}
    </FormControl>
  );
}
