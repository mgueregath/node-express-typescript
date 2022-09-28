import { Request, Response } from 'express';

class UserController {

    public getUser(request: Request, response: Response) {

        response.status(200).json({ 'id': request.params.id, 'name': 'Mirko' });
    }

    public getUsers(request: Request, response: Response) {

        response.status(200).json({ 'name': 'Mirko' });
    }

    public addUser(request: Request, response: Response): Response {
        console.log(request.body);

        response.status(201).json(request.body);

        return response;
    }
}

export default new UserController();