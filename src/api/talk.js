import { notUnderstood, rejectionMessage, questions } from './responses'

function talk(currentState, messageText) {
  const userAnswer = messageText.toLowerCase()
  if (currentState === 0 && userAnswer === 'no') {
    return rejectionMessage
  }
  if (userAnswer === 'yes') {
    return questions[currentState]
  }
  if (userAnswer === 'no') {
    return questions[currentState]
  }
  return notUnderstood
}

export default talk
