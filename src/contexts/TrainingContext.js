
import React, { createContext, useState } from 'react';
import uniqid from 'uniqid';

export const TrainingContext = createContext();

const TrainingContextProvider = ({ children }) => {
  const [trainings, setTrainings] = useState([
    {
      day: "Monday",
      level: '3',
      target: 'Legs',
      workout: [1, 2, 3, 4]
    },
    {
      day: "Monday",
      level: '3',
      target: 'Legs',
      workout: [1, 2, 3, 4]
    }
  ]);

  const addTraining = training => {
    setTrainings([...trainings, { ...training, id: uniqid() }]);
  };

  const deleteTraining = id => {
    setTrainings(trainings.filter(training => training.id !== id));
  };

  return (
    <TrainingContext.Provider value={{ trainings, addTraining, deleteTraining }}>
      {children}
    </TrainingContext.Provider>
  );
};

export default TrainingContextProvider;