import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";


const ExternalApi = axios.create({
  baseURL: "https://wmwvg.wiremockapi.cloud/", // Replace with your API
});

// ✅ Request Interceptor (Modify Before Sending)
ExternalApi.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token"); // Example: Fetch token
    if (token) {
      config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
    }
    console.log("Request Interceptor:", config);
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor (Handle Responses or Errors)
ExternalApi.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    if (error.response) {
      // Example: Handle Unauthorized (401)
      if (error.response.status === 401) {
        console.error("Unauthorized! Redirecting to login...");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);


export default ExternalApi;