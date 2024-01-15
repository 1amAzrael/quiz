// script.js

const quizData = 
    [
        {
            "question": "Word can be used to create a:",
            "options": ["Letter", "Spreadsheet", "Database files", "Slideshow presentation"],
            "correctAnswer": "Letter"
        },
        {
            "question": "The larger and more complicated a system, the more difficult it is to achieve:",
            "options": ["Confession", "Decision", "Conflict", "Congruence"],
            "correctAnswer": "Congruence"
        },
        {
            "question": "Which of the following is not a basic step in creating the worksheet?",
            "options": ["Save the workbook", "Modify the worksheet", "Enter text and data", "Copy the worksheet"],
            "correctAnswer": "Copy the worksheet"
        },
        {
            "question": "The undo command is useful for?",
            "options": ["Restoring to disk the last file deleted", "Reversing the most recent action or command", "Clearing the contents of the clipboard", "Clearing the document windows"],
            "correctAnswer": "Reversing the most recent action or command"
        },
        {
            "question": "The ..... is a database model conceived as a flexible way of representing objects and their relationships.",
            "options": ["Hierarchical data", "Network model", "Static model", "Data model"],
            "correctAnswer": "Network model"
        },
        {
            "question": "When you want to create an animation effect in Ms PowerPoint that moves in a custom path defined by you, you use",
            "options": ["Custom move", "Strategic move", "Custom path", "Motion path"],
            "correctAnswer": "Motion path"
        },
        {
            "question": "What is a hash total?",
            "options": ["The number of documents processed", "The number of lines of data entered", "The grand total of all rows and columns processed", "None of the above"],
            "correctAnswer": "None of the above"
        },
        {
            "question": "To select one hyperlink after another during a slide presentation, what do you press?",
            "options": ["Tab", "All of above"],
            "correctAnswer": "Tab"
        },
        {
            "question": "The selection bar is",
            "options": ["Below the title bar", "To the far left of your document", "Used to open other office applications", "None of the above"],
            "correctAnswer": "To the far left of your document"
        },
        {
            "question": "The special characters Word inserts into your document are called",
            "options": ["Removable characters", "Formatting characters", "Invisible characters", "Hidden characters"],
            "correctAnswer": "Formatting characters"
        },
        {
            "question": "Small code snippets written into Microsoft Visual Basic for Application or automatically generated while recording macros are called",
            "options": ["Functions", "Modules", "Controls", "Visual CH"],
            "correctAnswer": "Modules"
        },
        {
            "question": "When the formula bar is activated, you can see",
            "options": ["The Edit Formula button", "The Cancel button", "The Enter button", "All of above"],
            "correctAnswer": "All of above"
        },
        {
            "question": "The default way for animation to start is...........",
            "options": ["On Click", "With Previous", "After Previous", "Loop"],
            "correctAnswer": "On Click"
        },
        {
            "question": "A link in a Word document may",
            "options": ["Refer to the external file", "Refer to a web address", "Refer to a position in the Word document", "All of the above"],
            "correctAnswer": "All of the above"
        },
        {
            "question": "Internet Financial Reporting refers to:",
            "options": ["The use of company website to distribute financial information", "The use of digital media to distribute financial information", "The use of XBRL to distribute financial information", "The use of XML to distribute financial information"],
            "correctAnswer": "The use of company website to distribute financial information"
        },
        {
            "question": "The Select Object Browser is located",
            "options": ["In the lower-left corner of the Word screen", "Below the vertical scroll bar", "On the menu bar", "On the formatting toolbar"],
            "correctAnswer": "Below the vertical scroll bar"
        },
        {
            "question": "When integrating Ms-Word and Excel, Word is usually the",
            "options": ["Server", "Source", "Client", "None"],
            "correctAnswer": "Client"
        },
        {
            "question": "A style is a format-enhancing tool that does not include",
            "options": ["Font family", "File name", "Line height"],
            "correctAnswer": "File name"
        },
        {
            "question": "The ........... entry of the IF function is made up of two expressions and a comparison operator.",
            "options": ["Logical_test", "Value_if_true", "Value_if_false", "Value_if_equal"],
            "correctAnswer": "Logical_test"
        },
        {
            "question": "While more is often considered better, we reach a point at which our human minds cannot effectively absorb and process more information. This condition is called:",
            "options": ["Neural Collapse", "Strategic Capacity", "Information Overload", "Decision Aid Deficient"],
            "correctAnswer": "Information Overload"
        },
        {
            "question": "A web application or ........... is any application software that runs in a web browser",
            "options": ["Web app", "Computer", "Cloud", "Laptop"],
            "correctAnswer": "Web app"
        },
        {
            "question": "To make your PowerPoint presentation more impressive you can add",
            "options": ["Tables", "Video", "All of the above"],
            "correctAnswer": "All of the above"
        },
        {
            "question": "The AIS plays an important role in maintaining a strategic position.",
            "options": ["TRUE", "FALSE"],
            "correctAnswer": "TRUE"
        },
        {
            "question": "In a MS Word document, the minimum line or border width you can set is",
            "options": ["1/4 pt", "1 pt"],
            "correctAnswer": "1/4 pt"
        },
        {
            "question": "It is desirable that your new software also supports exporting and importing documents in formats, too.",
            "options": ["Auditable and printable", "Receivable and payable", "Word and Excel"],
            "correctAnswer": "Auditable and printable"
        },
        {
            "question": "To run a macro in Excel, when you are in BA window, you press",
            "options": ["Alt + F5", "F4"],
            "correctAnswer": "Alt + F5"
        },
        {
            "question": ".......... separates the contents of one Excel cell into separate columns.",
            "options": ["Text to Columns", "Concatenate", "Conditional Formatting", "Column"],
            "correctAnswer": "Text to Columns"
        },
        {
            "question": "The Rehearsal button that clears the Slide Time box and resets the time to 0:00 is the button.",
            "options": ["Repeat", "Pause", "Elapsed Time", "Slide Time"],
            "correctAnswer": "Repeat"
        },
        {
            "question": "A communication network which is used by large organization over regional, national or global area is called",
            "options": ["LAN", "WAN", "MAN", "Intranet"],
            "correctAnswer": "WAN"
        },
        {
            "question": "When you get more information than you can effectively assimilate, you suffer from information.",
            "options": ["Overload", "Due", "Overdraft", "Increases"],
            "correctAnswer": "Overload"
        },
        {
            "question": "How can you create a uniform appearance by adding a background image to all slides?",
            "options": ["Create a template", "Edit the slide master", "Use the autocorrect wizard", "All of the above"],
            "correctAnswer": "Edit the slide master"
        },
        {
            "question": "Formulas in Excel start with",
            "options": ["=", "-", "+", "/"],
            "correctAnswer": "="
        },
        {
            "question": "You create only a horizontal page break by first selecting",
            "options": ["A row below the row where you want the page break to occur", "A cell in row 1", "A cell in column A"],
            "correctAnswer": "A row below the row where you want the page break to occur"
        },
        {
            "question": "An accounting information system adds value to an organization in many ways. Which of the following is not a way in which the AIS adds value?",
            "options": ["Monitoring outputs for defects to increase product quality", "Providing more timely information", "Providing more accurate information", "Sharing expertise", "Monitoring outputs for defects to reduce the amount of waste"],
            "correctAnswer": "All of the above are ways in which an AIS adds value to the organization"
        },
        {
            "question": "Reviewers often use to communicate suggestions, tips, and other messages to the author of a document.",
            "options": ["Pages", "Links", "Comments", "Notes"],
            "correctAnswer": "Comments"
        },
        {
            "question": "Jovi and Associates operate a decorative stone and brick wholesale operation. Much of their inventory is stored outdoor. They have decided to put up a fence to safeguard their inventory. This would be considered a",
            "options": ["Detective control", "Prescriptive control", "Preventative control", "Corrective control"],
            "correctAnswer": "Preventative control"
        },
        {
            "question": "OpenERP",
            "options": ["Tiny ERP", "OpenERP"],
            "correctAnswer": "Tiny ERP"
        },
        {
            "question": "An accounting information systems topics impact corporate strategy and",
            "options": ["Culture", "Heritage", "Gender", "Business plans"],
            "correctAnswer": "Culture"
        },
        {
            "question": "IBM's ..... was one of the first DBMS's",
            "options": ["CMS", "MMS", "IMS"],
            "correctAnswer": "IMS"
        },
        {
            "question": "A denial of service attack occurs when perpetrator:",
            "options": ["Sends e-mail bombs", "Installs a logic time bomb", "Cracks a computer system"],
            "correctAnswer": "Sends e-mail bombs"
        },
        {
            "question": "When integrating Ms-Word and Excel, Word is usually the",
            "options": ["Server", "Source", "Client", "None"],
            "correctAnswer": "Client"
        },
        {
            "question": "Themes in word document can be saved and exported to be used by other people.",
            "options": ["True", "False"],
            "correctAnswer": "True"
        },
        {
            "question": "What are the banded rows in a table",
            "options": ["The rows that are collapsed when the size of the table rows or columns are squeezed", "Hidden rows in a table", "Alternatively colored rows of the table", "Top row of the table also called header"],
            "correctAnswer": "Alternatively colored rows of the table"
        },
        {
            "question": "Which of the following statements is not true with respect to the characteristics of the Master and the Transaction files:",
            "options": ["A transaction file contains records that hold the details of daily events affecting an attribute of the master file.", "A master file should only contain data that are of a permanent or semi-permanent nature.", "A transaction file is similar to a ledger in a manual accounting system.", "Records in a transaction file are used to update some data in the master file."],
            "correctAnswer": "A transaction file is similar to a ledger in a manual accounting system."
        },
        {
            "question": "..... are design templates that can be applied to an entire presentation that allows for consistency throughout the presentation.",
            "options": ["Layout", "Color", "Themes", "Standards"],
            "correctAnswer": "Themes"
        },
        {
            "question": "Data fields",
            "options": ["Are indicated by columns in a table", "May be left empty", "Separate data into many logical parts", "On the bottom of the vertical scroll bar"],
            "correctAnswer": "May be left empty"
        },
        {
            "question": "To drag a selected range of data to another worksheet in the same workbook, use the",
            "options": ["Tab key", "Alt key", "Shift key", "Ctrl key"],
            "correctAnswer": "Ctrl key"
        },
        {
            "question": "The ..... is a short horizontal line indicating the conclusion of a document.",
            "options": ["Intersection point", "End mark", "Status indicator", "Scroll box"],
            "correctAnswer": "Intersection point"
        },
        {
            "question": "Which one of the following is not RDBMS component?",
            "options": ["SQL engine", "Interface Driver", "Sub language", "Transaction"],
            "correctAnswer": "Transaction"
        },
        {
            "question": "You can activate a cell by",
            "options": ["Pressing the Tab key", "Clicking the cell", "Pressing an arrow key", "All of above"],
            "correctAnswer": "All of above"
        },
        {
            "question": "A ..... is a storage device connected to the server on a computer network",
            "options": ["Network drive", "Network memory port", "Server device", "Portable device"],
            "correctAnswer": "Network drive"
        },
        {
            "question": "Microsoft Access is a",
            "options": ["Relational database model", "Network database model", "Object-oriented database model", "Cloud database model"],
            "correctAnswer": "Relational database model"
        },
        {
            "question": "A fraud perpetrated by tricking a person into disclosing confidential information, such as a password, is called",
            "options": ["A Trojan horse", "Social engineering", "Hacking", "Scavenging"],
            "correctAnswer": "Social engineering"
        },
       
    
    // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options');

    questionElement.textContent = quizData[currentQuestion].question;

    optionsContainer.innerHTML = '';
    quizData[currentQuestion].options.forEach((option, index) => {
        const optionElement = document.createElement('label');
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${option}">
            ${option}
        `;
        optionsContainer.appendChild(optionElement);
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        if (selectedOption.value === quizData[currentQuestion].correctAnswer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    const quizContainer = document.querySelector('.quiz-container');
    quizContainer.innerHTML = `
        <h2>Your Score: ${score}/${quizData.length}</h2>
        <button onclick="location.reload()">Restart Quiz</button>
    `;
}

// Initial load
loadQuestion();
