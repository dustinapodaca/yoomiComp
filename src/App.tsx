import React from 'react';
import './App.css';
// import ExerciseContainer from './Components/ExerciseContainer';
import ReviewViewer from './Components/ReviewViewer';

function App() {
  return (
    <>
      <main className='bg-sky-100'>
        <div className="flex justify-center items-center h-screen">
          {/* <ExerciseContainer /> */}
          <ReviewViewer />
        </div>
      </main>
    </>
  );
}

export default App;
