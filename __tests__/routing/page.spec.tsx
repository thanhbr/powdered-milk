import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Algorithms from '../../src/app/learn/algorithms/page'

describe('Page', () => {
  it('renders a heading', () => {
    render(<Algorithms />)

    const element = screen.getByText('Algorithms')

    expect(element).toBeInTheDocument()
  })
})
