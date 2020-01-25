import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPicturesByEventId = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pictures.json`)
    .then((result) => {
      const allPicturesObj = result.data;
      const pictures = [];
      if (allPicturesObj != null) {
        Object.keys(allPicturesObj).forEach((pictureId) => {
          const newPicture = allPicturesObj[pictureId];
          newPicture.id = pictureId;
          pictures.push(newPicture);
        });
      }
      resolve(pictures);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSinglePicture = (pictureId) => axios.get(`${baseUrl}/pictures/${pictureId}.json`);

export default {
  getPicturesByEventId,
  getSinglePicture,
};
