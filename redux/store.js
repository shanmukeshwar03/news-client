import { configureStore } from '@reduxjs/toolkit';
import headlines from 'redux/headlines';
import business from 'redux/business';
import entertainment from 'redux/entertainment';
import health from 'redux/health';
import general from 'redux/general';
import science from 'redux/science';
import sports from 'redux/sports';
import technology from 'redux/technology';
import utils from 'redux/utils';

export default configureStore({
  reducer: {
    headlines,
    business,
    entertainment,
    general,
    health,
    science,
    sports,
    technology,
    utils,
  },
});
