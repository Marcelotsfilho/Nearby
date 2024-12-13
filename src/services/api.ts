import axios from "axios";

export const api = axios.create({
  //base: protocolo http; ip gerado pelo expo no terminal; :porta em que o servidor esta rodando
  baseURL: "http://200.18.141.84:3333",
  timeout: 700,
})