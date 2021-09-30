var questions = [
    {
        question: "what is 2 + 2",
        choice1: '1',
        choice2: '4',
        choice3: '7',
        choice4: '10',
        answer: 2,
    },
    {
        question: "who won europa league in 2021",
        choice1: 'chels',
        choice2: 'utd',
        choice3: 'Spurs',
        choice4: 'villareal',
        answer: 'villareal',
    },
    {
        question: "Who won the PL",
        choice1: 'City',
        choice2: 'Utd',
        choice3: 'Arsenal',
        choice4: 'Spurs',
        answer: 'City',
    },
    {
        question: "what year is it",
        choice1: '2021',
        choice2: '2222',
        choice3: '2023',
        choice4: '2022',
        answer: '2021',
    },
    {
        question: "what month is it",
        choice1: 'june',
        choice2: 'july',
        choice3: 'may',
        choice4: 'sept',
        answer: 'Sept',
    },
    {
        question: "what month is xmas",
        choice1: 'june',
        choice2: 'july',
        choice3: 'may',
        choice4: 'Dec',
        answer: 'Dec',
    },

    {
        question: "how old is Albert",
        choice1: '10',
        choice2: '20',
        choice3: '30',
        choice4: '30',
        answer: '20',
    },
];

questions.forEach(element => {
    element._id = element.question;
    db.put(element);
});




//get all docs
//list the docs in the table done using jQuery
//questions column should have the title of the question and the actions column should 
// use the document ID for editing or deleting the specific question

// questions.forEach(element => {
//     element._id = element.question;
//     db.Alldocs(element);
// });