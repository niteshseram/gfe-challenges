import './App.css';
import clsx from 'clsx';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div
      className={clsx(
        'min-h-screen bg-gradient',
        'flex justify-center items-start',
        'px-[17.5px] pt-[200px]'
      )}>
      <ProfileCard />
    </div>
  );
}

export default App;
