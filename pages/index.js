import Sidebar from 'components/Sidebar';
import News from 'components/News';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { updateMenuOpen } from 'redux/utils';

const Home = () => {
  const utils = useSelector((state) => state.utils);
  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    dispatch(updateMenuOpen());
  };

  return (
    <div className="home__container">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="get updated news" />
        <meta name="keywords" content="news article indain sports entertainment sciene health headlines" />
        <meta name="robots" content="index, follow" />
        <title>news</title>
      </Head>
      <div
        className={
          utils.menuOpen
            ? 'hamburger hamburger__active'
            : 'hamburger hamburger__inactive'
        }
        onClick={handleMenuOpen}
      >
        &#9776;
      </div>
      <Sidebar />
      <News />
    </div>
  );
};

export default Home;
