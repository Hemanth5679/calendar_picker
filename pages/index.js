import RecurrenceOptions from '../components/RecurrenceOptions';
import DateRangePicker from '../components/DateRangePicker';
import DatePreview from '../components/DatePreview';
import { RecurrenceProvider } from '../context/RecurrenceContext';

const Home = () => {
  return (
    <RecurrenceProvider>
      <div className="p-8 flex-container" style={{display: 'flex'}}>
        <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>
        <RecurrenceOptions />
        <DateRangePicker />
        <DatePreview />
      </div>
    </RecurrenceProvider>
  );
};

export default Home;
