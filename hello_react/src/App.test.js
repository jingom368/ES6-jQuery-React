import { render, screen } from '@testing-library/react'
import App from './a5~12_App1'

test('renders learn react link', () => {
    render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
