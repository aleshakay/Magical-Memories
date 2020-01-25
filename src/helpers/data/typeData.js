import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllEventTypes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/types.json?`)
    .then((result) => {
      const allTypesObj = result.data;
      const types = [];
      if (allTypesObj != null) {
        Object.keys(allTypesObj).forEach((typeId) => {
          const newType = allTypesObj[typeId];
          newType.id = typeId;
          types.push(newType);
        });
      }
      resolve(types);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleEventType = (typeId) => axios.get(`${baseUrl}/types/${typeId}.json`);

export default {
  getAllEventTypes,
  getSingleEventType,
};
