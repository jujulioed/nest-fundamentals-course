import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Injectable()
export class UserService {

    constructor(private readonly prisma: PrismaService) {}

    async create({email, name, password}: CreateUserDTO) {

        return await this.prisma.user.create({
            data: {
                email,
                name,
                password
            }
        });

    }

    async list() {

        return this.prisma.user.findMany();

    }

    async show(id: number) {

        return this.prisma.user.findUnique({
            where: {
                id: id
            }
        });
        
    }

    async update(id: number, data: UpdatePutUserDTO) {
        if(data.birthAt) {
            data.birthAt = new Date(data.birthAt);
        }

        return await this.prisma.user.update({
            data,
            where: {
                id
            }
        });
    }

    async updatePartial(id: number, data: UpdatePatchUserDTO) {
        if(data.birthAt) {
            data.birthAt = new Date(data.birthAt);
        }

        return await this.prisma.user.update({
            data,
            where: {
                id
            }
        });
    }

}