import clsx from 'clsx';

import './App.css';

import Footer from './components/Footer';
import Toast from './components/Toast/Toast';
import { useToastContext } from './context/ToastContext';

function App() {
  const { toast } = useToastContext();

  return (
    <main className="min-h-screen p-4">
      {toast.show && <Toast type={toast.type} message={toast.message} />}
      <div
        className={clsx(
          'rounded-md bg-white min-h-[calc(100vh_-_32px)]',
          'flex items-center'
        )}>
        <Footer />
      </div>
    </main>
  );
}

export default App;
