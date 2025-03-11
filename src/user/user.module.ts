import { Module } from "@nestjs/common";
import { UserController } from "./user.contoller";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [],
    exports: []
})
export class UserModule {}