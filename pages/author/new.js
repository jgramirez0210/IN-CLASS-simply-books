import React, { useEffect, useState } from 'react';
import { getAuthors } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';

export default function ViewAllAuthors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, []);

  return (
    <div>
      {authors.map((author) => (
        <AuthorCard key={author.firebaseKey} authorObj={author} />
      ))}
    </div>
  );
}
