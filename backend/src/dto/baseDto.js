import * as z from "zod";

export class BaseDto {
    static schema = z.object();

    static validate = (data) => { 
        result = this.schema.safeParse(data);

        if (!result.sucess) {
            const error = result.error.issues.map((issue) => issue.message);

            return {
                error: error,
                value: null
            }
        }

        return {
            error: null,
            value: result.data
        }
    }
}