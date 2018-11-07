import HttpRequest from "./axios";
import config from "../config";
const baseUrl =
	process.env.NODE_ENV === "development"
		? config.baseUrl.dev
		: config.baseUrl.pro;

const axios = new HttpRequest(baseUrl);

// 将请求数据的方式包装成一个对象
let api = {};
let likeGet = ["delete", "get", "head", "options"];
let likePost = ["post", "put", "patch"];

likeGet.forEach(method => {
	api[method] = function(url, params) {
		return axios.request({
			url,
			params,
			method: "get"
		});
	};
});

likePost.forEach(method => {
	api[method] = function(url, data) {
		return axios.request({
			url,
			data,
			method: "post"
		});
	};
});
export default api;
