import React, { ReactElement } from 'react';
import BookCalendar from '../components/bookingCalendar';

const TestScreen: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <h1>Test Screen</h1>
      <BookCalendar />
    </React.Fragment>
  );
};

export default TestScreen;
