import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";


interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    
    async execute({email, password}: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UserRepositories);

        const user = await usersRepositories.findOne({
            email
        })

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign({
            email: user.email
        }, 
        "ad82bc7e2b2b0f69d6709f4c015fcd31", 
        {
            subject: user.id,
            expiresIn: "1d"
        }) 

        return token;
    }
}

export { AuthenticateUserService }