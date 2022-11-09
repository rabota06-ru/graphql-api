import configService from "./config.service";
import axios from "axios";

interface SendMessageParams {
  phone: string;
  code: string;
}

export class SmsService {
  private readonly BASE_URL: string;

  constructor(credentials: { key: string; email: string }) {
    this.BASE_URL = `https://${credentials.email}:${credentials.key}@gate.smsaero.ru/v2`;
  }

  sendAuthenticationCode(params: SendMessageParams) {
    const message = `${params.code} - код подтверждения на сайте rabota06.ru`;

    return axios.get(`${this.BASE_URL}/sms/send`, {
      params: { number: params.phone, text: message, sign: "SMS Aero" },
    });
  }
}

const smsService = new SmsService(configService.getSmsApiCredentials());

export default smsService;
