import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../hooks/useFecth';
import Card from '../components/Card';

const Search = ({apiPath}) => {

  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");


  const {data:movies} = useFetch(apiPath, queryTerm);

  useEffect(() => {
     document.title = `${queryTerm} / CineBite`;
  }, [queryTerm]);


  return (
    <main>
      <section className='max-w-7xl m-auto py-7'>
        <p className='text-3xl text-gray-800'>
          {movies.length === 0 ? `No Result found for ${queryTerm}` : `Result for ${queryTerm}`}
        </p>
      </section>

      <section className='max-w-7xl m-auto py-7'>
        <div className='grid gap-5 sm-grid-cols-2 lg:grid-cols-3'>
          {
            movies.map((movie) => (
              <Card key={movie.id} movie={movie}/>
            ))
          }
        </div>
      </section>
    </main>
  )
}

export default Search