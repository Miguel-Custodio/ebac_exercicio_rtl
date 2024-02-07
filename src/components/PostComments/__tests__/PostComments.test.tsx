import Post from "..";

import { render, screen } from '@testing-library/react'

describe('Testes para os componentes', () => {
    test('Deve renderizar corretamente comentar', () => {
    render(<Post />)
    expect(screen.getByText('Comentar')).toBeInTheDocument()
    })

    test('Deve renderizar corretamente ul', () => {
        render(<Post />)
        expect(screen.getByTestId('ul-test')).toBeInTheDocument()
        })

        test('Deve renderizar corretamente form', () => {
            render(<Post />)
            expect(screen.getByTestId('form-test')).toBeInTheDocument()
            })
})
