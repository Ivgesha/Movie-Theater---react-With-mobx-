import axios from "axios";

const getAll = (url) => axios.get(url);
const getTaskById = (url, id) => axios.get(`${url}?userId=${id}`);

export { getAll, getTaskById };
