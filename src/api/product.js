import {get, post } from "../utils/request"

export function products(page) {
    return get("http://192.168.11.132:1314/api/detail", {
        page
    })
}