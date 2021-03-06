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

const saveEvent = (eventInfo) => axios.post(`${baseUrl}/events.json`, eventInfo);
const deleteEvent = (eventId) => axios.delete(`${baseUrl}/events/${eventId}.json`);
const updateEvent = (eventId, newEventInfo) => axios.put(`${baseUrl}/events/${eventId}.json`, newEventInfo);
const getSingleEvent = (eventId) => axios.get(`${baseUrl}/events/${eventId}.json`);

export default {
  getEventsbyUid, saveEvent, deleteEvent, updateEvent, getSingleEvent,
};
