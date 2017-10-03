'use strict';

let num = 0;
let count = 0;
let count_limit = 5;
let score = 0;
let STORE = [];

let quizQuestions = {
  1: {
    'question': 'How many natural lakes are there in Texas?',
    'options': {
      1: '58',
      2: '14',
      3: '1',
      4: '126'
    },
    'answer': 3 
  },

  2: {
    'question': 'What is the capital of Texas?',
    'options': {
      1: 'Austin',
      2: 'Houston',
      3: 'Dallas',
      4: 'Fort Worth'
    },
    'answer': 1
  },

  3: {
    'question': 'What is the Texas state bird?',
    'options': {
      1: 'Cardinal',
      2: 'Northern Mockingbird',
      3: 'Crow',
      4: 'Blue-bird'
    },
    'answer': 2
  },

  4: {
    'question': 'What is the Texas state flower?',
    'options': {
      1: 'Carnation',
      2: 'Tulip',
      3: 'Rose',
      4: 'Bluebonnet'
    },
    'answer': 4
  },

  5: {
    'question': 'What is the main cash crop in Texas?',
    'options': {
      1: 'Corn',
      2: 'Hay',
      3: 'Cotton',
      4: 'Pecans'
    },
    'answer': 3
  },

  6: {
    'question': 'A popular nickname for Texas is...?',
    'options': {
      1: 'State of Sun',
      2: 'Lone Star State',
      3: 'Land of Lakes',
      4: 'State of Desert'
    },
    'answer': 2
  },

  7: {
    'question': 'What is the Texas state tree?',
    'options': {
      1: 'Willow',
      2: 'Pecan',
      3: 'Oak',
      4: 'Bodark'
    },
    'answer': 2
  },

  8: {
    'question': 'Who is the governor of Texas in 2017?',
    'options': {
      1: 'Greg Abbott',
      2: 'Rick Perry',
      3: 'George Wood',
      4: 'Peter Bell'
    },
    'answer': 1
  },

  9: {
    'question': 'What year did Texas join the union?',
    'options': {
      1: '1907',
      2: '1842',
      3: '1840',
      4: '1845'
    },
    'answer': 4
  },

  10: {
    'question': 'Which state borders Texas directly to the north?',
    'options': {
      1: 'Misouri',
      2: 'Mississippi',
      3: 'Oklahoma',
      4: 'New Mexico'
    },
    'answer': 3
  },

};

function newGame(){
  num = 0;
  count = 0;
  score = 0;
  STORE = [];
  console.log('game reset!');
}
function findQuestion() {
  pickQuestion();
  while (wasAsked()) {
    pickQuestion();
  }
}
function pickQuestion(){
  let limit = Object.keys(quizQuestions).length;
  num = Math.floor((Math.random() * limit) + 1);
}
function wasAsked() {
  let result = false;
  for (let i=0;i<=STORE.length;i++){
    if (num == STORE[i]) {
      result = true;
    }
  }
  return result;
}
function loadQuestion() {
  STORE.push(num);
  $('#text').html(quizQuestions[num]['question']);
  $('#option-1').html(quizQuestions[num]['options'][1]);
  $('#option-2').html(quizQuestions[num]['options'][2]);
  $('#option-3').html(quizQuestions[num]['options'][3]);
  $('#option-4').html(quizQuestions[num]['options'][4]);
  renderScore();
  count++;
  $('#progress').text(count+'/'+count_limit);
}
function correct(user_answer) {
  if (user_answer == quizQuestions[num]['answer']) {
    return true;
  } else {
    return false;
  }
}
function renderScore(){
  $('.score').text(score);
}

$(document).ready(function() {
    
  $('#start-button').click(function() {       
    $('#start').fadeOut(500, function() {
      newGame();
      findQuestion();
      loadQuestion();
      $('#quiz').fadeIn(500);    
    });
  });

  $('#answer-button').click(function() {
    let user_answer = $('input:radio[name=answer]:checked').val();
    console.log(user_answer);
    if (!user_answer) {
      console.log('nothing selected');
      alert('Please make a selection!');
    } else {
      console.log('selection made');    
      if (correct(user_answer)) {
        $('#quiz').fadeOut(500, function() {
          score++;
          renderScore();
          $('#right').fadeIn(500);    
        });
      } else {
        $('#quiz').fadeOut(500, function() {
          $('#wrong').fadeIn(500);
        });
      }
    }
  });

  $('.continue-button').click(function() {       
    $('#right').fadeOut(500, function() {
      $('#wrong').fadeOut(500, function() {
        if (count >= count_limit) {
          renderScore();
          $('#final-score').fadeIn(500);
        } else {
          findQuestion();
          loadQuestion();
          $('form input').prop('checked', false);
          $('#quiz').fadeIn(500);
        }
      });
    });
  });

  $('#start-over').click(function() {       
    $('#final-score').fadeOut(500, function() {
      newGame();
      findQuestion();
      loadQuestion();
      $('form input').prop('checked', false);
      $('#quiz').fadeIn(500);    
    });
  });


});