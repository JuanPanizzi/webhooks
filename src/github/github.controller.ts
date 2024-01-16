/* eslint-disable prettier/prettier */
import { Body, Controller, Headers, Post } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  //acá github nos va a enviar una peticion Post (A la ruta /github/). Y nos va a enviar un header 'x-github-event'
  @Post( '/' )
webhookHandler(
    @Headers( 'x-github-event' ) githubEvent: any,
    @Body() body: any,
) {

  //https://smee.io/H0EF8PHJ6AI22B3

  console.log({ githubEvent });
  console.log(body)
  return { githubEvent };
}
}
