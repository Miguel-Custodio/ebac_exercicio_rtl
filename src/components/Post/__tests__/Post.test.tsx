import Post from "..";

import { render, screen } from '@testing-library/react'

describe('Testes para os componentes', () => {
    test('Deve renderizar corretamente img', () => {
    render(<Post children={undefined} imageUrl={""} />)
    expect(screen.getByTestId('img-test')).toBeInTheDocument()
    })

    test('Deve renderizar corretamente p', () => {
        render(<Post children={undefined} imageUrl={""} />)
        expect(screen.getByTestId('p-test')).toBeInTheDocument()
        })
})
