import { Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client";
@Injectable({})

export class AuthService {
  signup() {
    return {msg:'I am sigend up'}
  }
  
  signin() {
    return {msg:'I am signin in'}
  }
}

// const service = new AuthService()