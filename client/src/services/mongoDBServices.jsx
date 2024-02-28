import axios from "axios";
const http = axios.create({
  baseURL: `http://localhost:9999`,
});

function getTsundereList(messages) {
  return http
    .get(`/tsundereconversations`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}
export { getTsundereList };
