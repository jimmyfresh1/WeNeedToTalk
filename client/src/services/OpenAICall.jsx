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

function sendMessage2(messages, maxTokens = 60) {
  return http
    .post(`/api/full`, { messages: messages, maxTokens: maxTokens })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}
export { sendMessage, sendMessage2 };
