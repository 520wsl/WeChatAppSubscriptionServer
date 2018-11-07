/*
 * @Author: Mad Dragon 395548460@qq.com 
 * @Date: 2018-11-07 15:32:18 
 * @Last Modified by: Mad Dragon
 * @Last Modified time: 2018-11-07 21:18:06
 * @explanatory:  axios 接口封装
 */
import axios from "axios";

class HttpRequest {
	constructor(baseUrl = baseUrl) {
		this.baseUrl = baseUrl;
	}

	getInsideConfig() {
		const config = {
			baseURL: this.baseUrl,
			timeout: 10000,
			responseType: "json",
			headers: {
				"If-Modified-Since": 0,
				"Cache-Control": "no-cache"
			}
		};
		return config;
	}

	interceptors(instance) {
		// axios 请求拦截
		instance.interceptors.request.use(
			config => {
				return config;
			},
			error => {
				return Promise.reject(error);
			}
		);
		// axios 响应拦截
		instance.interceptors.response.use(
			res => {
				let { data} = res;
				return data;
			},
			error => {
				return Promise.reject(error);
			}
		);
	}
	request(options) {
		const instance = axios.create();
		options = Object.assign(this.getInsideConfig(), options);
		this.interceptors(instance);
		return instance(options);
	}
}
export default HttpRequest;
