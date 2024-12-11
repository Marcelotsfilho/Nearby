import axios from "axios";

export const api = axios.create({
  //base: protocolo http; ip gerado pelo expo no terminal; :porta em que o servidor esta rodando
  baseURL: "http://192.168.1.7:3333",
  timeout: 700,
})