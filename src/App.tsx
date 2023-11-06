import React from 'react';
import './App.css';
import ExerciseContainer from './Components/ExerciseContainer';

function App() {
  return (
    <>
      <main>
        <div className="flex justify-center items-center h-screen">
          <p>Hello</p>
          <ExerciseContainer />
        </div>
      </main>
    </>
  );
}

export default App;
