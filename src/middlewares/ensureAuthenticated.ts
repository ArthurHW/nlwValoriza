import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request, 
    response: Response, 
    next: NextFunction
) {
    const authToken = request.headers.authorization

    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing"
        })
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(token, "ad82bc7e2b2b0f69d6709f4c015fcd31") as IPayload

        request.user_id = sub;

        return next()
    } catch(err) {
        return response.status(401).json({
            message: err.message
        })
    }

}