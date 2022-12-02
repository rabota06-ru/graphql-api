import configService from "./config.service";
import axios from "axios";
import { AxiosBasicCredentials } from "axios";

interface SendMessageParams {
  phone: string;
  code: string;
}

export class SmsService {
  private readonly BASE_URL = "http://@gate.smsaero.ru/v2";
  private readonly credentials: AxiosBasicCredentials;

  constructor(credentials: { key: string; email: string }) {
    this.credentials = {
      password: credentials.key,
      username: credentials.email,
    };
  }

  sendAuthenticationCode(params: SendMessageParams) {
    const message = `${params.code} - код подтверждения на сайте rabota06.ru`;

    if (configService.isProduction()) {
      return axios.get("/sms/send", {
        baseURL: this.BASE_URL,
        params: { number: params.phone, text: message, sign: "SMS Aero" },
        auth: this.credentials,
      });
    } else {
      console.log(params.code);
    }
  }
}

const smsService = new SmsService(configService.getSmsApiCredentials());

export default smsService;
