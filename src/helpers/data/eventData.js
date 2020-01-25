import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEventsbyUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/events.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allEventsObj = result.data;
      const events = [];
      if (allEventsObj != null) {
        Object.keys(allEventsObj).forEach((eventId) => {
          const newEvent = allEventsObj[eventId];
          newEvent.id = eventId;
          events.push(newEvent);
        });
      }
      resolve(events);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getEventsbyUid };
