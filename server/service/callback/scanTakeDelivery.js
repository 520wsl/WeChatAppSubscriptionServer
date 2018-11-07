import api from "../../utils/api.request";

async function postEventInfo(params) {
  return await api.get("/class/child");
}

export default {
  postEventInfo
};
