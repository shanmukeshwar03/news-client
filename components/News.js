import { useEffect } from 'react';
import { fetchHeadlines } from 'redux/headlines';
import { fetchBusiness } from 'redux/business';
import { useSelector, useDispatch } from 'react-redux';
import { CATEGORIES } from 'utils/constants';
import moment from 'moment';
import Shrimmer from 'components/Shrimmer';
import { fetchEntertainment } from 'redux/entertainment';
import { fetchGeneral } from 'redux/general';
import { fetchHealth } from 'redux/health';
import { fetchScience } from 'redux/science';
import { fetchSports } from 'redux/sports';
import { fetchTechnology } from 'redux/technology';
import Header from './Header';

const News = () => {
  const state = useSelector((state) => state);
  const utils = state.utils;
  const currenctCategory = state[utils.category];
  const dispatch = useDispatch();


  useEffect(() => {
    fetcher();
  }, [utils.category]);

  const fetcher = () => {
    const len = currenctCategory.articles.length;
    if (currenctCategory.limit) {
      switch (utils.category) {
        case CATEGORIES[0]:
          dispatch(fetchHeadlines(len));
          break;
        case CATEGORIES[1]:
          dispatch(fetchBusiness(len));
          break;
        case CATEGORIES[2]:
          dispatch(fetchEntertainment(len));
          break;
        case CATEGORIES[3]:
          dispatch(fetchGeneral(len));
          break;
        case CATEGORIES[4]:
          dispatch(fetchHealth(len));
          break;
        case CATEGORIES[5]:
          dispatch(fetchScience(len));
          break;
        case CATEGORIES[6]:
          dispatch(fetchSports(len));
          break;
        case CATEGORIES[7]:
          dispatch(fetchTechnology(len));
          break;
        default:
          break;
      }
    }
  };

  const handleScroll = (event) => {
    const bottom =
      event.target.scrollHeight <=
      event.target.scrollTop + event.target.clientHeight + 100;
    if (bottom) {
      fetcher();
    }
  };

  return (
    <div onScroll={handleScroll} className="body">
      <Header title={currenctCategory.title} />
      <div className="news__container">
        {currenctCategory.articles.map((article, key) => (
          <div
            className="news__article"
            key={key}
            onClick={() => {
              window.open(article.url, '_blank');
            }}
          >
            <img src={article.urlToImage ?? '/background.jpg'} alt="background" />
            <div className="news__div">
              <span className="news__title">{article.title}</span>
              <div className="news__st">
                <span className="news__source">{article.source.name}</span>
                <span className="news__timestamp">
                  {moment(article.publishedAt).fromNow()}
                </span>
              </div>
              <span className="news__description">{article.description}</span>
            </div>
          </div>
        ))}
        {currenctCategory.loading && (
          <>
            <Shrimmer />
            <Shrimmer />
            <Shrimmer />
            <Shrimmer />
            <Shrimmer />
            <Shrimmer />
            <Shrimmer />
            <Shrimmer />
            <Shrimmer />
            <Shrimmer />
          </>
        )}
      </div>
    </div>
  );
};

export default News;
