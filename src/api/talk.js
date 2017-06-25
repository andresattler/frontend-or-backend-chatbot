import { notUnderstood, rejectionMessage, questions } from './responses'

function talk(currentState, messageText) {
  const userAnswer = messageText.toLowerCase()
  if (currentState === 0 && userAnswer === 'no') {
    return rejectionMessage
  }
  if (userAnswer === 'yes') {
    return questions[0]
  }
  if (userAnswer === 'no') {
    return questions[0]
  }
  return notUnderstood
}

export default talk
