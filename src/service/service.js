import featureJson from '../data/feature-list.json' assert { type: 'json' };

const KEY = 'featureDB';

export const service = {
  query,
};

function query() {
  return featureJson;
}
