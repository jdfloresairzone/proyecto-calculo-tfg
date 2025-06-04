import { render, screen } from "@testing-library/react"
import { Icon, IconData } from "ui"

describe('Icon', () => {
  it.each(Object.values(IconData).map(value => ({ name: value })))('is $name icon being displayed', ({ name }) => {
    const size = 28

    render(<Icon name={name} size={size} />)

    expect(screen.queryByRole("img", { name: `${name} icon` })).toBeInTheDocument()
  })
})
