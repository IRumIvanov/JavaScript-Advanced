class Request {
    constructor(method, uri, version, message) {
        this.method = method,
            this.uri = uri,
            this.version = version,
            this.message = message,
            this.response = undefined,
            this.fulfilled = false

        return {
            method: this.method,
            uri: this.uri,
            version: this.version,
            message: this.message,
            response: this.response,
            fulfilled: this.fulfilled
        }
    }

}
let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);