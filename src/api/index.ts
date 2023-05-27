import request from "@/utils/request";

// 请求参数
import type { loginFormData } from "./type";

//项目用户相关的请求地址
enum API {
  LOGIN_URL = "/admin/acl/index/login",
}

//登录接口
export const reqLogin = (data: loginFormData) =>
  request.post(API.LOGIN_URL, data);
