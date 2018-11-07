import axios from "axios";

async function scanTakeDelivery(params) {
  return axios.get("http://www.dianjiangla.com/common/islogin");
}

export default {
  scanTakeDelivery
};
