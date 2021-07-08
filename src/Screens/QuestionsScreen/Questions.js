import HatchbackIcon from '../../Icons/Hatchbackicon1.svg';
import MPVicon from '../../Icons/MPV_icon1.svg';
import SedanIcon from '../../Icons/SedanIcon1.svg';
import SUVicon from '../../Icons/SUVIcon1.svg';

export const allQuestions = [
    {
        label: "Assume you got a proposal of earning 10 times your current earnings.",
        label2: "For which you need to shift to a location 1000 kms away from your home for next 5 years, and you need to respond in next 15 mins.",
        label3: "What will be your instant reaction?",
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
                isChecked: false,
                icon: SedanIcon
            }, {
                label: "HATCHBACK",
                value: 2,
                isChecked: false,
                icon: HatchbackIcon
            }, {
                label: "SUV",
                value: 3
                , isChecked: false
                , icon: SUVicon
            },
            {
                label: "MPV",
                value: 4,
                isChecked: false,
                icon: MPVicon
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
        questionNumber: "2",
        twoColumns: true,
        icons: true
    },
    {
        label: "How many seats you want in your car ?",
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
            }
        ],
        multiSelect: true,
        isFill: false,
        isDropDown: false,
        singleSelect: false,
        questionNumber: "3"
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
        questionNumber: "4"
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
        questionNumber: "5"
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
        questionNumber: "6"
    },
    {
        labelMinimum: "For cash options budget ready range to invest INR",
        labelMaximum: "To INR",
        value: 7,
        minimumOptions: [
            {
                title: "200000",
                value: 1
            }, {
                title: "400000",
                value: 2

            }, {
                title: "800000",
                value: 3

            }, {
                title: "1600000",
                value: 4

            }, {
                title: "3200000",
                value: 5
            }, {
                title: "6400000",
                value: 5
            }, {
                title: "12800000",
                value: 5
            }, {
                title: "32000000",
                value: 5
            }, {
                title: "64000000",
                value: 5
            }
            , {
                title: "100000000",
                value: 5
            }
        ],
        multiSelect: false,
        isFill: false,
        isDropDown: false,
        singleSelect: false,
        minMax: true,
        questionNumber: "7"
    },
    {
        labelMinimum: "Budget per month ready to invest INR",
        labelMaximum: "To INR",
        loanLabel: "Loan Tenure ( in years )",
        downPaymentLabel: "Down Payment INR",
        note: 'Note : -Person who want to finance their car partially, pls select cash option only for correct budgeting.',
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
        questionNumber: "7",
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
                label: "2-3 years",
                value: 2
            }, {
                label: "4-5 years",
                value: 4
            }, {
                label: "6-7 years",
                value: 6
            }, {
                label: "More than 8 years",
                value: 8
            }
        ],
        multiSelect: false,
        isFill: false,
        isDropDown: false,
        singleSelect: true,
        questionNumber: "8"
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
        questionNumber: "9",
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
        questionNumber: "10",
        dragAndDrop: true
    },
    {
        label: "Do you have any preference of must have advance features in your car ?",
        value: 3,
        answerOptions: [
            {
                label: "No preferences",
                value: 1,
                isChecked: false

            }, {
                label: "Sunroof",
                value: 2,
                isChecked: false

            }, {
                label: "Turbo Engine",
                value: 3,
                isChecked: false

            },
            {
                label: "Cruise control",
                value: 4,
                isChecked: false

            }, {
                label: "Rear AC vents",
                value: 5,
                isChecked: false

            }, {
                label: "Engine Capacity",
                value: 6,
                options: [
                    {
                        label: '< 1 L',
                        isChecked: false

                    },
                    {
                        label: '1.1 - 1.5 L',
                        isChecked: false

                    }, {
                        label: '1.6 - 2 L',
                        isChecked: false

                    }, {
                        label: '> 2 L',
                        isChecked: false

                    }
                ]
            },
            {
                label: "Drive",
                value: 7,
                options: [
                    {
                        label: 'Front Drive',
                        isChecked: false

                    },
                    {
                        label: 'Rear Drive',
                        isChecked: false

                    }, {
                        label: '4 X 4',
                        isChecked: false

                    }
                ]
            },

        ],
        multiSelect: true,
        isFill: false,
        isDropDown: false,
        singleSelect: false,
        questionNumber: "11"
    },
    {
        label: "Do you have any brand preference ?",
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
                label: "CITROEN",
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
                label: "HONDA",
                value: 6,
                isChecked: false
            },
            {
                label: "HYUNDAI",
                value: 7,
                isChecked: false
            },
            {
                label: "JAGUAR",
                value: 8,
                isChecked: false
            },
            {
                label: "JEEP",
                value: 9,
                isChecked: false
            }, {
                label: "KIA",
                value: 10,
                isChecked: false
            }, {
                label: "MAHINDRA",
                value: 11,
                isChecked: false
            }, {
                label: "MARUTI SUZUKI",
                value: 12,
                isChecked: false
            }, {
                label: "MERCEDES",
                value: 13,
                isChecked: false
            },
            {
                label: "MG MOTORS",
                value: 14,
                isChecked: false
            }, {
                label: "MINI",
                value: 15,
                isChecked: false
            }, {
                label: "NISSAN",
                value: 16,
                isChecked: false
            }, {
                label: "RENAULT",
                value: 17,
                isChecked: false
            }, {
                label: "SKODA",
                value: 18,
                isChecked: false
            }, {
                label: "TATA",
                value: 19,
                isChecked: false
            }, {
                label: "TOYOTA",
                value: 20,
                isChecked: false
            }, {
                label: "VOLKSWAGEN",
                value: 21,
                isChecked: false
            }, {
                label: "VOLVO",
                value: 22,
                isChecked: false
            },
        ],
        multiSelect: true,
        isFill: false,
        isDropDown: false,
        singleSelect: false,
        questionNumber: "12",
        twoColumns: true
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
        questionNumber: "13",
        getInformation: true
        ,lastQuestion: true
    },
]