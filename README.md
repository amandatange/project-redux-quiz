# UX Improvements to Redux quiz group project

Improve UX so next step for user after answering a question is clearer. 

## The problem

Answer buttons - 
    The old version only had audio cues for when an answer was wrong and confetti when the answer was right. 
    
    The new version highlights the selected answer as either right or wrong by changing the background color to either green or red respectively. Additionally, the selected answer gets a symbol, tick for right and cross for wrong, to further highlight the result.

Next button - 
    The old version had a progressbar which got an additional next button when an answer had been chosen. This was not very clear to the user. At the start of the quiz the progress bar is empty and it was not obvious to the user what it was, and the next button that appears after selected answer is in the same color as the bar which makes it difficult to detect. There was also no text present to explain what it was. 

    The new version has the progress logged at the top of the page in writing instead. It shows which question the user is currently on as well as the total number of questions.
    The next button has writing that tells the user that pressing the button will lead to the next question, as well as an arrow pointing 'forward'/right. The button is disabled if no answer has been selected. The button's text changes from 'next question' to 'finish quiz' to remind the user that they are on the last question.

Quiz summary - 
    The old version had a results page where each question was written, as well as a message of whether or not the user got the answer right. This was in plain text with nothing standing out making it somewhat unclear to get a quick overview. The number of correct answers was presented at the bottom so the user was forced to scroll down to see it.

    The new version has the number of correct answers at the top of the page. Each question is still presented as well as whether the user was right/wrong, but the cross/tick symbols are used as well for highlight and to give the user a better overview.



## View it live
Old version - 
https://redux-quiz-week13.netlify.app/

Improved ux/changes branch - 
https://quiz-updated-ux.netlify.app/ 
