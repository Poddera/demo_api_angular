import { Injectable } from '@angular/core';
import { LoginDTO } from './dto';

@Injectable()
export class LoginService {
  constructor() {}

  login(loginDTO: LoginDTO) {
    console.log(loginDTO);
  }
}
