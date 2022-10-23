import './App.css';
import { Helmet } from 'react-helmet';

export default function App() {
  return (
      <>
        <Helmet titleTemplate="%s | Wordbook.pro" defer={false}>
            <title>Loading</title>
        </Helmet>
        {/* <Router /> */}
      </>
  );
}