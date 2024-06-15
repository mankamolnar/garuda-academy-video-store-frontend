import { combineReducers } from "redux";

import token from './TokenReducer';
import categories from './CategoryReducers';
import categoriesWithPurchases from './CategoryWithPurchasesReducer';
import videos from './VideosReducer';
import video from './VideoReducer';
import registration from './RegistrationReducer';
import tokenVerification from './TokenVerificationReducer';

export default combineReducers({
  token,
  tokenVerification,
  categories,
  categoriesWithPurchases,
  videos,
  video,
  registration
});
