import { Request, Response } from 'express';
import { User } from '../../../entities/user.interface';
import UserRepository from './../../../persistence/repositories/user.repository';

class UserController {


    public searchUsers(request: Request, response: Response) {
        console.log('search');
        UserRepository.searchUsers(<string> request.query.text).then(user => {
            response.status(200).json({status: true, data: user});
        }, error => {
            response.status(404).json({status: false});
        });
    }

    public getUser(request: Request, response: Response) {

        UserRepository.findUser(+request.params.id).then(user => {
            response.status(200).json({status: true, data: user});
        }, error => {
            response.status(404).json({status: false});
        });
    }

    public getUsers(request: Request, response: Response) {

        UserRepository.findUsers().then(users => {
            response.status(200).json({status: true, data: users});
        }, error => {
            response.status(404).json({status: false});
        });
    }

    public addUser(request: Request, response: Response) {
        let user = new User();
        user.firstName = request.body.firstName;
        user.lastName = request.body.lastName;

        UserRepository.newUser(user).then(users => {
            response.status(201).json({status: true, data: users});
        }, error => {
            response.status(400).json({status: false});
        });
    }
}

export default new UserController();