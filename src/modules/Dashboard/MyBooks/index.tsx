import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import Head from 'components/Head';
import AuthContext from 'modules/Auth/context/AuthContext';
import { useTranslation } from 'react-i18next';
import './styles.scss';
import Button from 'components/Button';
import { useAlert, useBooks } from 'hooks';
import { useNavigate } from 'react-router';

const MyBooks = () => {
  const { t } = useTranslation();
  const { user } = useContext(AuthContext);
  const [title, setTitme] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { createBook } = useBooks();
  const { showSuccess, showError } = useAlert();
  const navigate = useNavigate();

  const handleBookNameChange = (e: ChangeEvent<HTMLInputElement>) => setTitme(e.target.value);

  const inputRef = useRef<HTMLInputElement | undefined>();

  const focusInput = () => inputRef.current?.focus();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title || title.length < 3) {
      return showError({
        title: 'Title validation failed',
        description: 'Please provide a valid title above three letters',
      });
    }
    setIsLoading(true);
    createBook({ title })
      .then(({ data }) => {
        setIsLoading(false);
        console.log(data);
        showSuccess({
          title: 'Created',
          description: `${title} is created successfully. Start writing something awesome`,
        });
        navigate(`/book/${data.sid}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-books dashboard-content">
      <Head title="My Books" />
      <div className="summary">
        <h3 className="title">{t('app.mybooks.summary', { firstName: user.fullName })}</h3>
        <dl className="d-flex">
          <div className="summary-card">
            <dd>$19.2k</dd>
            <dt>{t('app.mybooks.lifetimeEarnings')}</dt>
          </div>
          <div className="summary-card">
            <dd>18</dd>
            <dt>{t('app.mybooks.unfinishedBooks')}</dt>
          </div>
          <div className="summary-card">
            <dd>1.6k</dd>
            <dt>{t('app.mybooks.newReaders')}</dt>
          </div>
          <div className="summary-card">
            <dd>72</dd>
            <dt>{t('app.mybooks.newComments')}</dt>
          </div>

          <div className="summary-card">
            <dd>6</dd>
            <dt>{t('app.mybooks.editorMessages')}</dt>
          </div>
        </dl>
      </div>
      <div className="create-book">
        <h2>Create a new book</h2>
        <p>
          Write and format your book in the Bookry Book Editor, then instantly typeset them to portable document format
          (pdf).
        </p>
        <form className="input-container" onClick={focusInput} onSubmit={onSubmit}>
          <input
            ref={inputRef}
            placeholder={t('app.mybooks.inputPlaceholder')}
            name="title"
            type="text"
            onChange={handleBookNameChange}
            value={title}
          />
          <Button text="Create" type="dark" className="submit" disabled={isLoading} />
        </form>
      </div>
      <div className="books-list">
        <h3>Your Books:</h3>
      </div>
    </div>
  );
};

export default MyBooks;
