import ContentBasedRecommender from './classes/ContentBasedRecommender';
import CollaborativeFilteringRecommender from './classes/CollaborativeFilteringRecommender';
import { addUserRating } from './utils/common';
const MOVIES_DATA = require('./data/movies_data.json');
const RATINGS_DATA = require('./data/ratings_data.json').data;
const ME_USER_ID = 0;

const cbRecommender = new ContentBasedRecommender({
    minScore: 0.5,
    maxSimilarDocuments: 100,
    debug: true,
    numberOfTopics: 20
});
const cbfRecommender = new CollaborativeFilteringRecommender();

const ME_USER_RATINGS = [
    addUserRating(ME_USER_ID, 'Terminator 3: Rise of the Machines', '5.0', MOVIES_DATA),
    addUserRating(ME_USER_ID, 'Jarhead', '4.0', MOVIES_DATA),
    addUserRating(ME_USER_ID, 'Back to the Future Part II', '3.0', MOVIES_DATA),
    addUserRating(ME_USER_ID, 'Jurassic Park', '4.0', MOVIES_DATA),
    addUserRating(ME_USER_ID, 'Reservoir Dogs', '3.0', MOVIES_DATA),
    addUserRating(ME_USER_ID, 'Men in Black II', '3.0', MOVIES_DATA),
    addUserRating(ME_USER_ID, 'Bad Boys II', '5.0', MOVIES_DATA),
    addUserRating(ME_USER_ID, 'Sissi', '1.0', MOVIES_DATA),
    addUserRating(ME_USER_ID, 'Titanic', '1.0', MOVIES_DATA)
];

/* cbRecommender.train(MOVIES_DATA.data.slice(0, 500));

const similarDocuments = cbRecommender.getSimilarDocuments('110', 0, 10);

console.log('Content-based filtering', similarDocuments); */
