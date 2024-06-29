import * as React from 'react';
import { useGetAllAttractionQuery } from './redux/actions.tsx';

export default function App() {
  const { data, error, isLoading } = useGetAllAttractionQuery();

  console.log('Error:', error); // Logging error for debugging

  return (
    <div className="App">
      {error ? (
        <>Error: {error.message}</> // Display the error message
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <ul>
            {data.map(attraction => (
              <li key={attraction.id}>
                {attraction.topics} {attraction.title} {/* Adjust fields based on actual attraction structure */}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}
