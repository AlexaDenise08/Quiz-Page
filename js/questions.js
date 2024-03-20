let questions = [
  {
    numb: 1,
    question: "There are how many heading tags in HTML?",
    answer: "6",
    options: [
      "3",
      "5",
      "8",
      "6"
    ]
  },
  {
    numb: 2,
    question: " What is HTML?",
    answer: "All of the mentioned ",
    options: [
      "HTML describes the structure of a webpage",
      "HTML is the standard markup language mainly used to create web pages",
      "HTML consists of a set of elements that helps the browser how to view the content",
      "All of the mentioned "
    ]
  },
    {
    numb: 3,
    question: "Who is the father of HTML?",
    answer: "Tim Berners-Lee ",
    options: [
      "Rasmus Lerdorf",
      "Tim Berners-Lee ",
      "Brendan Eich",
      "Sergey Brin"
    ]
  },
    {
    numb: 4,
    question: "What does HTML stand for?",
    answer: "Hypertext Markup Language",
    options: [
      "Hypertext Markup Language",
      "Hypertext Machine Language",
      "Hightext Market Language",
      "Hyperlink Markup Code"
    ]
  },
    {
    numb: 5,
    question: "Which one is the correct sequence of HTML tags:",
    answer: "html, head, title, body",
    options: [
      "head, body, title, html",
      "html, head, title, body",
      "html, title, head, body",
      "None of the above"
    ]
  },
  {
    numb: 6,
    question: "Setting an inline-block in CSS requires which of the following properties?",
    answer: "Display",
    options: [
      "Display",
      "Color",
      "Block",
      "None of the above"
    ]
  },

  {
    numb: 7,
    question: "Which of the following properties is used to align text in CSS?",
    answer: "text-align",
    options: [
      "text-alignment",
      "text-align",
      "text",
      "text-position"
    ]
  },

  {
    numb: 8,
    question: "Which of the following are valid CSS position property values?",
    answer: "All of the above",
    options: [
      "Static",
      "Relative",
      "Fixed",
      "All of the above"
    ]
  },
  {
    numb: 9,
    question: "The CSS property used to specify the transparency of an element is?",
    answer: "Opacity",
    options: [
      "Opacity",
      "Visibility",
      "Filter",
      "None of the above"
    ]
  },
  {
    numb: 10,
    question: "How can we set the maximum width of the elements content box using CSS?",
    answer: "Max-width property",
    options: [
      "height property",
      "Max-height property",
      "Max-width property",
      "None of the above"
    ]
  },
  {
    numb: 11,
    question: "What keyword is used to declare a variable in JavaScript?",
    answer: "All of the above",
    options: [
      "var",
      "let",
      "const",
      "All of the above"
    ]
  },
  {
    numb: 12,
    question: " What symbol is used to access elements in an array by their index in JavaScript?",
    answer: "[]",
    options: [
      "%",
      "#",
      "$",
      "[]"
    ]
  },
  {
    numb: 13,
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    answer: "Array",
    options: [
      "Number",
      "Array",
      "Boolean",
      "String"
    ]
  },
  {
    numb: 14,
    question: "Which of the following is used to declare a function in JavaScript?",
    answer: "function myFunction()",
    options: [
      "function myFunction()",
      "def myFunction()",
      "func myFunction()",
      "declare function myFunction()"
    ]
  },
  {
    numb: 15,
    question: " Which method is used to remove the last element from an array in JavaScript?",
    answer: "pop()",
    options: [
      "pop()",
      "push()",
      "shift()",
      "unshift()"
    ]
  },
];
  // Add other questions here
;

// Function to check the answer and show an alert
function checkAnswer(question, selectedIndex) {
  if (question.options[selectedIndex] === question.answer) {
    alert("Welcome!");
  } else {
    alert("Incorrect!");
  }
}

// Example usage:
let selectedOptionIndex = 3; // Replace this with the actual selected option index
checkAnswer(questions[0], selectedOptionIndex);