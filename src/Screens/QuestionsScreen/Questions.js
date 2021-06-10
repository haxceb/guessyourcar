export const allQuestions = [
    {
        label: "Assume you got a proposal of earning 10 times your current earning. For which you need to shift to a location 1000 kms away from your home for next 5 years, and you need to respond in next 15 mins. What will be your instant reaction?",
        value: 0,
        answerOptions: [
            {
                label: "Accept the offer & Go.",
                value: 1
            }, {
                label: "Reject the offer",
                value: 2
            }, {
                label: "Take the risk of loosing the opportunity & request for one day’s time so that you can discuss with your family & decide.",
                value: 3
            }
        ],
        multiSelect: false,
        isFill: false,
        isDropDown: false,
        singleSelect: true,
        questionNumber: "1",
        minMax: false,
        loanPayment: false,
        downPayment: false,
        getInformation: false
    },
    {
        label: "Which type of car you would like to own ?",
        value: 1,
        answerOptions: [
            {
                label: "SEDAN",
                value: 1,
                isChecked: false
            }, {
                label: "HATCHBACK",
                value: 2,
                isChecked: false
            }, {
                label: "SUV",
                value: 3
                , isChecked: false
            },
            {
                label: "MPV",
                value: 4,
                isChecked: false
            },
            // {
            //     label: "BMW",
            //     value: 5,
            //     isChecked: false
            // },
            // {
            //     label: "MERCEDES",
            //     value: 6,
            //     isChecked: false
            // }
        ],
        multiSelect: true,
        isFill: false,
        isDropDown: false,
        singleSelect: false,
        questionNumber: "2"
    },
    {
        label: "Which brand of car you would like to own ?",
        value: 2,
        answerOptions: [
            {
                label: "AUDI",
                value: 1,
                isChecked: false
            }, {
                label: "BMW",
                value: 2,
                isChecked: false
            }, {
                label: "MARUTI SUZUKI",
                value: 3
                , isChecked: false
            },
            {
                label: "DATSUN",
                value: 4,
                isChecked: false
            },
            {
                label: "FORD",
                value: 5,
                isChecked: false
            },
            {
                label: "TATA",
                value: 6,
                isChecked: false
            },
            {
                label: "HONDA",
                value: 7,
                isChecked: false
            },
            {
                label: "HYUNDAI",
                value: 8,
                isChecked: false
            },
        ],
        multiSelect: true,
        isFill: false,
        isDropDown: false,
        singleSelect: false,
        questionNumber: "3"
    },
    {
        label: "How many seats you want in your car",
        value: 3,
        answerOptions: [
            {
                label: "5",
                value: 1,
                isChecked: false
            }, {
                label: "6",
                value: 2,
                isChecked: false
            }, {
                label: "7",
                value: 3,
                isChecked: false
            },
            {
                label: "8",
                value: 4,
                isChecked: false
            }, {
                label: "9",
                value: 5,
                isChecked: false
            }
        ],
        multiSelect: true,
        isFill: false,
        isDropDown: false,
        singleSelect: false,
        questionNumber: "4"
    },
    {
        label: "Which fuel type will you prefer ?",
        value: 4,
        answerOptions: [
            {
                label: "PETROL",
                value: 1,
                isChecked: false
            }, {
                label: "DIESEL",
                value: 2,
                isChecked: false
            }, {
                label: "CNG",
                value: 3,
                isChecked: false
            }, {
                label: "ELECTRIC",
                value: 4,
                isChecked: false
            }
            // , {
            //     label: "Demo Field",
            //     value: 5,
            //     isChecked: false
            // },
            // {
            //     label: "Demo Field",
            //     value: 6,
            //     isChecked: false
            // }
        ],
        multiSelect: true,
        isFill: false,
        isDropDown: false,
        singleSelect: false,
        questionNumber: "5"
    },
    {
        label: "Which is your preferred transmission ?",
        value: 5,
        answerOptions: [
            {
                label: "MANUAL",
                isCorrect: false,
                isChecked: false,
                value: 1
            }, {
                label: "AUTOMATIC",
                isCorrect: true,
                value: 2
                , isChecked: false
            }
        ],
        multiSelect: true,
        isFill: false,
        isDropDown: false,
        singleSelect: false,
        questionNumber: "6"
    },
    {
        label: "Would you like to buy car via ?",
        value: 6,
        answerOptions: [
            {
                label: "CASH",
                value: 1
            }, {
                label: "FINANCE",
                value: 2
            }
        ],
        multiSelect: false,
        isFill: false,
        isDropDown: false,
        singleSelect: true,
        questionNumber: "7"
    },
    {
        labelMinimum: "For cash options budget ready range to invest INR",
        labelMaximum: "To INR",
        value: 7,
        minimumOptions: [
            {
                title: "2000000",
                value: 1
            }, {
                title: "30000000",
                value: 2

            }, {
                title: "40000000",
                value: 3

            }, {
                title: "50000000",
                value: 4

            }, {
                title: "60000000",
                value: 5

            }
        ],
        multiSelect: false,
        isFill: false,
        isDropDown: false,
        singleSelect: false,
        minMax: true,
        questionNumber: "8"
    },
    {
        labelMinimum: "For Finance options budget ready range to invest per month INR",
        labelMaximum: "To INR",
        loanLabel: "Loan Tenure in years",
        downPaymentLabel: "Down Payment which can be paid /planning to pay cash INR",
        loanYears: [
            {
                title: "1",
                value: 1
            }, {
                title: "2",
                value: 2

            }, {
                title: "3",
                value: 3

            }, {
                title: "4",
                value: 4

            }, {
                title: "5",
                value: 5
            }
        ],
        downPaymentOptions: [
            {
                title: "50000",
                value: 1
            }, {
                title: "100000",
                value: 2

            }, {
                title: "1000000",
                value: 3

            }, {
                title: "1500000 ",
                value: 4

            }, {
                title: "2000000",
                value: 5
            }
        ],
        value: 7,
        minimumOptions: [
            {
                title: "2000000",
                value: 1
            }, {
                title: "3000000",
                value: 2

            }, {
                title: "4000000",
                value: 3

            }, {
                title: "5000000",
                value: 4

            }, {
                title: "6000000",
                value: 5

            }
        ],
        multiSelect: false,
        isFill: false,
        isDropDown: false,
        singleSelect: false,
        minMax: true,
        questionNumber: "9",
        loanPayment: true,
        downPayment: true
    },
    {
        label: "For how many Years would like to keep this car with you ?",
        value: 8,
        answerOptions: [
            {
                label: "1 years",
                value: 1
            }, {
                label: "2 years",
                value: 2
            }, {
                label: "3 years",
                value: 3
            }, {
                label: "4 years",
                value: 4
            }, {
                label: "5 years",
                value: 5
            },
            , {
                label: "6 years",
                value: 6
            }
        ],
        multiSelect: false,
        isFill: false,
        isDropDown: false,
        singleSelect: true,
        questionNumber: "10"
    },

    {
        downPaymentLabel: "What is your Average Running in Kilometres per day ?",
        downPaymentOptions: [
            {
                title: "50",
                value: 1
            }, {
                title: "100",
                value: 2

            }, {
                title: "150",
                value: 3

            }
        ],
        value: 9,
        questionNumber: "11",
        downPayment: true
    },
    {
        label: "What are the reasons for which you actually want to buy the desired car ? ( Arrange it in the descending order of priority ) For eg :-mention 1 for Top most need and 2 for lesser important need and so on",
        value: 11,
        answerOptions: [
            {
                text: "High Status",
                id: 1
            }, {
                text: "More Engine Power",
                id: 2
            }, {
                text: "Luggage Space",
                id: 3
            }, {
                text: "Lower Running Cost",
                id: 4
            }, {
                text: "Want to own Latest Car",
                id: 5
            }, {
                text: "Style",
                id: 6
            }
        ],
        questionNumber: "12",
        dragAndDrop: true
    },
    {
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscingelit, Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        value: 12,
        answerOptions: [
            {
                label: "consectetur adipiscing",
                isCorrect: false,
                value: 1
            }, {
                label: "consectetur adipiscing",
                isCorrect: true,
                value: 2
            }, {
                label: "consectetur adipiscing",
                isCorrect: false,
                value: 3
            },
            {
                label: "consectetur adipiscing",
                isCorrect: false,
                value: 3
            }
        ],
        multiSelect: true,
        questionNumber: "13"
    },


    {
        label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscingelit, Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        value: 13,
        answerOptions: [
            {
                label: "consectetur adipiscing",
                isCorrect: false,
                value: 1
            }, {
                label: "consectetur adipiscing",
                isCorrect: true,
                value: 2
            }, {
                label: "consectetur adipiscing",
                isCorrect: false,
                value: 3
            },
            {
                label: "consectetur adipiscing",
                isCorrect: false,
                value: 3
            }
        ],
        questionNumber: "14",
        getInformation: true,
        lastQuestion: true
    },
]