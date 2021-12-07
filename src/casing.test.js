import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

test('turn lowercase to uppercase', () => {
  const note = 'lowercase to uppercase'

  expect(caseFunction('lowercase to uppercase')).toBe('LOWERCASE TO UPPERCASE')
});