import { notUnderstood, rejectionMessage, questions, result } from './responses'

function talk(currentState, messageText, total) {
  const userAnswer = messageText.toLowerCase()
  if (currentState === 0 && userAnswer === 'no') {
    return {
      text: rejectionMessage,
      type: 'END',
    }
  }
  if (currentState === questions.length) {
    return {
      text: total > 0 ? result('backend') : result('frontend'),
      type: 'END',
    }
  }
  if (userAnswer === 'yes') {
    return {
      text: questions[currentState].text,
      type: 'QUESTION',
      weight: questions[currentState].weight,
    }
  }
  if (userAnswer === 'no') {
    return {
      text: questions[currentState].text,
      type: 'QUESTION',
      weight: -questions[currentState].weight,
    }
  }
  return {
    text: notUnderstood,
    type: 'NOTUNDERSTOOD',
  }
}

export default talk
