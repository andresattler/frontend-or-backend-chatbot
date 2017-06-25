import { notUnderstood, rejectionMessage, questions } from './responses'

function talk(currentState, messageText) {
  const userAnswer = messageText.toLowerCase()
  if (currentState === 0 && userAnswer === 'no') {
    return { text: rejectionMessage }
  }
  if (userAnswer === 'yes') {
    return {
      text: questions[currentState],
      next: true,
    }
  }
  if (userAnswer === 'no') {
    return {
      text: questions[currentState],
      next: true,
    }
  }
  return { text: notUnderstood }
}

export default talk
