import axios from "axios";

const request = axios.create({
     baseURL: process.env.VUE_APP_API_URL,
})
console.log(process.env.VUE_APP_API_URL)

export const get = async (path, options) => {
     const res = await request.get(path, options)
     return res.data;
}

export * as request from "@/services/request"