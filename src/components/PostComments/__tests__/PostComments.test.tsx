import Post from "..";

import { render, screen, fireEvent } from '@testing-library/react'

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
            render(<Post />);
            expect(screen.getByTestId('form-test')).toBeInTheDocument();
        })

        test('Deve adicionar comentários corretamente', () => {
            render(<Post />)
            fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Primeiro Comentário' } })
            fireEvent.click(screen.getByText('Comentar'))

            fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Segundo Comentário' } })
            fireEvent.click(screen.getByText('Comentar'))
            
            const commentList = screen.getByTestId('ul-test')
            expect(commentList).toHaveTextContent('Primeiro Comentário')
            expect(commentList).toHaveTextContent('Segundo Comentário')
            })
})
