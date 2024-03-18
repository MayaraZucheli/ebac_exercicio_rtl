import React, { useState } from 'react';

const App: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setComments([...comments, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="app">
      <div className="post">
        <img
          className="post-image"
          src="https://www.orangeboxminiaturas.com.br/img/products/batmovel-1989-figura-batman-em-metal-jada-toys-1-24-jad-98260_1_1000.jpg"
          alt="Imagem do Batmóvel"
        />
        <p className="post-text">
          Olha só que legal minha miniatura do Batmóvel.
        </p>
        <div>
          <ul className="post-comments" data-testid="comment-list">
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <form
            className="post-comments-form"
            onSubmit={handleAddComment}
            data-testid="comment-form"
          >
            <textarea
              className="post-comments-form-textarea"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Adicione um comentário"
              data-testid="comment-input"
            />
            <button
              className="post-comments-form-button"
              type="submit"
              data-testid="add-comment-button"
            >
              Comentar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
