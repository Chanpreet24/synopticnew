function deleteQuiz(e){
    e.preventDefault();
    var quizToBeDeleted = $('#deleteQuiz').val();
    db.get(quizToBeDeleted).then(function(doc){
        console.log(JSON.stringify(doc));
        return db.remove(doc);
    });

    {
       return window.location.href = './edit.html';
    };
}

$('#deleteQuizBtn').on('click', deleteQuiz);


$(document).ready(function(){
loadQuestionsIntoTable();
});


function loadQuestionsIntoTable(){
//get list of questions from pouchDB use alldocs

db.allDocs({
  include_docs: true
}).then(function (result) {
 
 var questions = result.rows;
 questions.forEach(element => {
    console.log(element);
     var row = "<tr><td>" + element.id + "</td><td>" + element.doc.answer + "</td><td>" + "</td><td>" + "<button>Edit Question</button>" + "</td><td>" + "<button>Delete Question</button>" + "</td></tr>";
     $("#quizTable").append(row);
 });
}).catch(function (err) {
  console.log(err);
});

//for each question in the list use jQuery to append a new tr td to the table
}

document.querySelector('#editQuiz-back-button').addEventListener('click', () => {
  window.location.href = './administratorGame.html';
});