import { Injectable } from "@nestjs/common";
import { Quirk } from "../entities/quirk.entity";
import { Repository } from "typeorm";

@Injectable()
export class QuirkRepository extends Repository<Quirk> { }