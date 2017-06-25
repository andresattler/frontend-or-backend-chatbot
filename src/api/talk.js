import { notUnderstood, rejectionMessage, questions } from './responses'

function talk(currentState, messageText) {
  const userAnswer = messageText.toLowerCase()
  if (currentState === 0 && userAnswer === 'no') {
    return {
      text: rejectionMessage,
      type: 'END',
    }
  }
  if (userAnswer === 'yes') {
    return {
      text: questions[currentState],
      type: 'QUESTION',
    }
  }
  if (userAnswer === 'no') {
    return {
      text: questions[currentState],
      type: 'QUESTION',
    }
  }
  return {
    text: notUnderstood,
    type: 'NOTUNDERSTOOD',
  }
}

export default talk
