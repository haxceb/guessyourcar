import { Button, Grid, LinearProgress, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Question from '../../Components/Question';
import { Alert } from '@material-ui/lab';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { allQuestions } from './Questions';
import MinMaxQuestion from '../../Components/Question/MinMax';
import GetInformationQuestion from '../../Components/Question/GetInformation';
import axios from 'axios'


export default function Index() {
    const [questionNumber, setQuestionNumber] = useState(1);

    const [allQuizQuestions, setAllQuizQuestions] = useState(allQuestions);

    const [allAnswers, setAllAnswers] = useState({});
    const [checkBox, setCheckBox] = useState({
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
        9: {},
        10: {},
        11: {},
        12: {},
        13: {},
        14: {},
        15: {},
        16: {},
    });


    const handleNextClick = () => {
        if ((questionNumber + 1) <= allQuestions?.length) {
            setQuestionNumber(questionNumber + 1);
        }
    }
    const handlePreviousClick = () => {
        if ((questionNumber - 1) !== 0) {
            setQuestionNumber(questionNumber - 1);
        }
    }

    const handleQuestions = () => {
        if (allQuestions[questionNumber - 1]?.minMax || allQuestions[questionNumber - 1]?.loanPayment || allQuestions[questionNumber - 1]?.downPayment) {
            return <MinMaxQuestion currentQuestion={allQuestions[questionNumber - 1]} checkBox={checkBox} questionNumber={questionNumber} setCheckBox={setCheckBox} />;
        } else if (allQuestions[questionNumber - 1]?.getInformation) {
            return <GetInformationQuestion currentQuestion={allQuestions[questionNumber - 1]} checkBox={checkBox} questionNumber={questionNumber} setCheckBox={setCheckBox} />;
        } else {
            return <Question currentQuestion={allQuestions[questionNumber - 1]} questionNumber={questionNumber} checkBox={checkBox} setCheckBox={setCheckBox} />;
        }
    }

    console.log(Object.keys(checkBox[2]));
    const checkEmotion = () => {
        let val = checkBox[1]?.value ?? 1;
        if (val === "1") {
            return 'ASPIRATIONAL';
        } else if (val === "2") {
            return 'EMOTIONAL'
        } else return 'RATIONAL'
    }

    const converttoNumber = () => {
        return Object.keys(checkBox[4])?.map((i) => Number(i))
    }

    let req = {
        emotion: checkEmotion(),
        carType: Object.keys(checkBox[2]) ?? ["SUV"],
        fundingOption: checkBox[8]?.label ?? 'CASH',
        minCashBudget: Number(checkBox[8]?.minCashBudget) ?? 200000,
        maxCashBudget: Number(checkBox[8]?.maxCashBudget) ?? 100000000,
        loanTenure: Number(checkBox[9]?.minLoanValue) ?? 4,
        minEMI: Number(checkBox[9]?.minCashBudget) ?? 20000,
        maxEMI: Number(checkBox[9]?.maxCashBudget) ?? 200000,
        downPayment: Number(checkBox[9]?.minDownPayment) ?? 200000,
        transmissionType: Object.keys(checkBox[6] ?? ['AUTOMATIC']),
        reasonStatus: 0,
        reasonEnginePower: 0,
        reasonLuggageSpace: 0,
        reasonRunningCost: 0,
        reasonLatestCar: 0,
        reasonComfort: 0,
        reasonStyle: 0,
        fuelType: Object.keys(checkBox[5] ?? ['PETROL']),
        seatingCapacity: converttoNumber(),
        brand: Object.keys(checkBox[3]) ?? [
            "MARUTI"
        ],
        fullName: `${checkBox[14]?.firstName} ${checkBox[14]?.lastName}`,
        emailAddress: "abcsas@xyz.com",
        mobileNumber: checkBox[14]?.mobileNumber,
        city: checkBox[14]?.city,
        duration: Number(checkBox[10]?.value) ?? 4,
        running: Number(checkBox[11]?.minDownPayment) ?? 100,
        advanceFeatures: {
            noPreference: true,
            sunroof: false,
            turboEngine: false,
            cruiseControl: true,
            rearACVents: false,
            moreThanTwoAirBags: false,
            driveType: "FRONT",
            engineCapacity: "ONE"
        }
    }


    const handleSubmit = () => {
        const response = axios.post('http://184.168.126.65:8080/gyc/questionnaire/result', req);
        console.log({ response });
        if (response) {
            alert({ response });
        }
    }
    return (
        <Grid container >
            <Grid item container xs={12} md={10} className="p-5">
                <Grid item xs={12} className="mb-3">
                    <LinearProgress variant="buffer" color="primary" value={(questionNumber * 8.33)} valueBuffer={questionNumber * 10} />
                </Grid>
                <Grid item container xs={12}>
                    <Alert severity="info">
                        <strong>Quiz Rules:</strong> Select natural &amp; instant response only for accurate prediction
                    </Alert>
                </Grid>
                <Grid item container xs={12} className="mb-3 mt-4">
                    <Typography variant="h5" style={{ fontWeight: 700 }}>Question # {questionNumber}/<span style={{ fontSize: '16px' }}>{allQuestions?.length}</span></Typography>
                </Grid>
                <Grid item container xs={12}>
                    {handleQuestions()}
                </Grid>
                <Grid item container xs={12} className="mb-3 mt-4" justify="center">
                    <Button variant="contained" className="mr-5" color="primary" onClick={handlePreviousClick} startIcon={<ArrowLeftIcon />}>Previous</Button>
                    {allQuestions[questionNumber - 1]?.lastQuestion ?
                        <Button variant="contained" color="primary" className="" onClick={handleSubmit}>Submit</Button> :
                        <Button variant="contained" color="primary" className="" onClick={handleNextClick} endIcon={<ArrowRightIcon />}>Next</Button>}
                </Grid>
            </Grid>
            <Grid item container xs={2} className="border mb-2 mt-2" justify="center" alignContent="center">
                Ad Here
            </Grid>

            <Grid item container className="border mb-2" style={{ height: 150 }} justify="center" alignContent="center">
                Ad Here
            </Grid>
        </Grid>

    )
}
