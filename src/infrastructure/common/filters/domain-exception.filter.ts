import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { DomainError } from 'src/domain/errors/domain-error';

@Catch(DomainError)
export class DomainExceptionFilter implements ExceptionFilter {
  catch(exception: DomainError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    const errorMessage = 'An unexpected server error occurred.';

    // Mapping Domain Errors ke HTTP Status Code
    // if (exception instanceof UserAlreadyExistsError) {
    //   status = HttpStatus.CONFLICT; // 409 Conflict
    //   errorMessage = exception.message;
    // } else if (
    //   exception instanceof UserNotFoundError ||
    //   exception instanceof InvalidCredentialsError
    // ) {
    //   status = HttpStatus.UNAUTHORIZED; // 401 Unauthorized
    //   errorMessage = exception.message;
    // }
    // ... tambahkan mapping error Domain lainnya di sini

    console.error(
      `[Domain Error]: Code: ${exception.code}, Message: ${exception.message}`,
    );

    response.status(status).json({
      statusCode: status,
      code: exception.code,
      message: errorMessage,
      timestamp: new Date().toISOString(),
      path: ctx.getRequest().url,
    });
  }
}
