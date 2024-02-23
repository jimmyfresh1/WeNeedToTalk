import axios from "axios";
const http = axios.create({
  baseURL: `http://localhost:9999`,
});

function sendMessage(messages) {
  return http
    .post(`/chat`, { messages: messages })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}
export { sendMessage };
