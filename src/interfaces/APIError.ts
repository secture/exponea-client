class APIError extends Error {

    private msg: string;
    private code: number;

    constructor(code: number, messages: string[]) {

        const msg = messages.join(";\n");

        super(msg);

        this.msg = msg;
        this.code = code;
        this.msg = msg;
        Object.setPrototypeOf(this, APIError.prototype);
    }

    print() {
        return `Error ${this.code}: \n${this.msg}`;
    }
}