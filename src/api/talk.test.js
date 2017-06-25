import talk from './talk'
import { notUnderstood, rejectionMessage, questions } from './responses'

test('wrong inputs', () => {
  expect(talk(0, 'something wrong')).toBe(notUnderstood)
})

test('initial yes', () => {
  expect(talk(0, 'yes')).toBe(questions[0])
  expect(talk(0, 'Yes')).toBe(questions[0])
  expect(talk(0, 'YES')).toBe(questions[0])
})

test('initial no', () => {
  expect(talk(0, 'no')).toBe(rejectionMessage)
  expect(talk(0, 'No')).toBe(rejectionMessage)
  expect(talk(0, 'NO')).toBe(rejectionMessage)
})

test('next question', () => {
  expect(talk(1, 'yes')).toBe(questions[1])
  expect(talk(1, 'no')).toBe(questions[1])
})
