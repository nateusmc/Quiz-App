'use strict';
let num = 0;
let count = 0;
let count_limit = 5;
let score = 0;
let STORE = [];


//Questions on Facts about Texas

let quiz_questions = {
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