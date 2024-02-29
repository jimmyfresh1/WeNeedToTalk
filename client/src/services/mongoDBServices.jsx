import axios from "axios";
const http = axios.create({
  baseURL: `http://localhost:9999`,
});

function getTsundereList() {
  return http
    .get(`/api/tsundereconversations`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}

function getTsundereSingle(id) {
  return http
    .get(`/api/tsundereconversations/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}
function createConversation(saveObject) {
  return http
    .post(`/api/tsundereconversations/`, saveObject)
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
      setError(err.response.data.errors);
    });
}
export { getTsundereList, getTsundereSingle, createConversation };
