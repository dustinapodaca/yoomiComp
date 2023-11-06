import React from 'react';
import './App.css';
// import ExerciseContainer from './Components/ExerciseContainer';
import ExerciseViewer from './Components/ExerciseViewer';

function App() {
  return (
    <>
      <main className='bg-sky-100'>
        <div className="flex justify-center items-center h-screen">
          <ExerciseViewer />
        </div>
      </main>
    </>
  );
}

export default App;
