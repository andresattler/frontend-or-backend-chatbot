import talk from './talk'
import { notUnderstood, rejectionMessage, questions, result } from './responses'

test('wrong inputs', () => {
  expect(talk(0, 'something wrong').text).toBe(notUnderstood)
})

test('initial yes', () => {
  expect(talk(0, 'yes').text).toBe(questions[0].text)
  expect(talk(0, 'Yes').text).toBe(questions[0].text)
  expect(talk(0, 'YES').text).toBe(questions[0].text)
})

test('initial no', () => {
  expect(talk(0, 'no').text).toBe(rejectionMessage)
  expect(talk(0, 'No').text).toBe(rejectionMessage)
  expect(talk(0, 'NO').text).toBe(rejectionMessage)
})

test('next question', () => {
  expect(talk(1, 'yes')).toMatchObject({
    text: questions[1].text,
    type: 'QUESTION',
  })
  expect(talk(1, 'no')).toMatchObject({
    text: questions[1].text,
    type: 'QUESTION',
  })
})

test('show result', () => {
  expect(talk(questions.length, 'yes')).toMatchObject({
    text: result('frontend'),
    type: 'END',
  })
})
