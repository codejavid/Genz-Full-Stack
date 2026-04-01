import React from 'react'
import useFetch from '../hooks/useFetch'
import Card from '../components/Card';

const MovieList = ({apiPath}) => {



  const { data:movies } = useFetch(apiPath);
  

  return (
    <main>
      {/* <section className='max-w-6xl mx-auto py-6'>
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {movies?.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
        </div>
      </section> */}
      <h1>{apiPath}</h1>
    </main>
  )
}

export default MovieList