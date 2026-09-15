class ApiError extends Error {
    constructor (message="Internal Server Error",statusCode=500) {
        super(message);

        this.statusCode = statusCode;

        this.name = this.constructor.name;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }

    static badRequest(message="bad request"){
        return new ApiError(message, 400);
    }

    static unauthorized(message="unauthorized"){
        return new ApiError(message, 401);
    }

    static forbidden(message="forbidden"){
        return new ApiError(message, 403);
    }

    static notFound(message="not found") {
        return new ApiError(message, 404);
    }
    
    static internalServerError(message="internal server error"){
        return new ApiError(message, 500);
    }

    static badGateway(message="bad gateway"){
        return new ApiError(message,502);
    }

    static serviceUnavailable(message="service unavailable"){
        return new ApiError(message, 503);
    }

    static gatewayTimeOut(message="gateway timeout"){
        return new ApiError(message, 504);
    }
}