import featureJson from '../data/feature-list.json' assert { type: 'json' };
import reviewList from '../data/review-list.json' assert { type: 'json' };

const KEY = 'featureDB';

export const service = {
  query,
  getReview,
};

function query() {
  return featureJson;
}

function getReview() {
  return reviewList;
}
