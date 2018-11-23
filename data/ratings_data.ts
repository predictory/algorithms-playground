import * as csv from 'csvtojson';
import * as fs from 'fs';

const ratings = {
    data: []
};

csv()
    .fromFile('src/data/ratings.csv')
    .then((data: any) => {
        data.forEach((element) => {
            ratings.data.push({
                userId: element.userId,
                movieId: element.movieId,
                rating: element.rating,
                timestamp: element.timestamp
            });
        });
    })
    .then(() => {
        console.log('Writing to files');
        fs.writeFile('src/data/ratings_data.json', JSON.stringify(ratings), (err) => {
            if (err) {
                console.log(err);
            }
        });
    });