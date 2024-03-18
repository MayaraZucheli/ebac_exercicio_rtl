import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('adiciona dois comentários', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('comment-input');
  const addButton = getByTestId('add-comment-button');

  fireEvent.change(input, { target: { value: 'Primeiro comentário' } });
  fireEvent.click(addButton);
  fireEvent.change(input, { target: { value: 'Segundo comentário' } });
  fireEvent.click(addButton);

  const commentList = getByTestId('comment-list');

  expect(commentList.children.length).toBe(2);
});
