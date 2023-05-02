import { Injectable } from '@nestjs/common';
import { CreateQuirkDto } from './dto/create-quirk.dto';
import { QuirkRepository } from './quirk.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Quirk } from '../entities/quirk.entity';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class QuirkService {
  constructor(
    @InjectRepository(Quirk) private quirkRepository: QuirkRepository,
    private readonly httpService: HttpService
  ) { }

  async create(quirks: CreateQuirkDto[]) {
    return this.quirkRepository.save(quirks);
  }

  async findAll() {
    return this.quirkRepository.find();
  }

  async shorteen(url: string) {
    const baseUri = process.env.URL_SHORTENER;
    const { data } = await this.httpService.axiosRef.get(`${baseUri}=${url}`);

    return data;
  }

  async nationale(name: string) {
    const baseUri = process.env.GET_NATIONALITY;
    const { data } = await this.httpService.axiosRef.get(`${baseUri}=${name}`);

    return data.country[1];
  }

  async unshorteen(url: string) {
    const baseUri = process.env.URL_UNSHORTEN;
    const { data } = await this.httpService.axiosRef.get(`${baseUri}/${url}`);

    return data;
  }

  async rundome() {
    const baseUri = process.env.GET_RUNDOME;
    const { data } = await this.httpService.axiosRef.get(baseUri);

    return data['activity'];
  }

  async chuck() {
    const baseUri = process.env.GET_CHUCK;
    const { data } = await this.httpService.axiosRef.get(baseUri);

    return data['value'];
  }

  async insultor() {
    const baseUri = process.env.GET_INSULTOR;
    const { data } = await this.httpService.axiosRef.get(baseUri);

    return data['insult'];
  }

  async daddeh() {
    const baseUri = process.env.GET_DADDEH;
    const { data } = await this.httpService.axiosRef.get(baseUri);
    const setup = data['setup'];
    const delivery = data['delivery'];

    const joke = `${setup} ${delivery}`;

    return joke;
  }

  async quote() {
    const baseUri = process.env.GET_QUOTE;
    const { data } = await this.httpService.axiosRef.get(baseUri);
    const quote = data[0]['content'];

    return quote;
  }

  async wuwuid() {
    const baseUri = process.env.GET_UUID;
    const { data } = await this.httpService.axiosRef.get(baseUri);

    return data[0];
  }

  async catify() {
    const baseUri = process.env.GET_CATIFY;
    const { data } = await this.httpService.axiosRef.get(baseUri);

    return data['fact'];

  }

  async agify(name: string) {
    const baseUri = process.env.GET_AGIFY;
    const { data } = await this.httpService.axiosRef.get(`${baseUri}=${name}`);

    return data;
  }

  async ipfy() {
    const baseUri = process.env.GET_IP;
    const { data } = await this.httpService.axiosRef.get(baseUri);

    return data.ip;
  }


}
