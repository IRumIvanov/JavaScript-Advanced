function requestValidator(request){

    let validRequest = {}; 

if(request.method === 'GET' || request.method === 'POST'
|| request.method === 'DELETE' || request.method === 'CONNECT'){
    validRequest.method = request.method;
}else{
    throw new Error(`Invalid request header: Invalid ${'Method'}`)}

if(request.uri.includes('.') && request.uri.match(/[a-zA-Z0-9]+/) !== null) {
validRequest.uri = request.uri;

}else{
    throw new Error(`Invalid request header: Invalid ${'Uri'}`)}

if(request.version === 'HTTP/0.9' || request.version === 'HTTP/1.0' || 
request.version === 'HTTP/1.1' || request.version === 'HTTP/2.0'){
    validRequest.version = request.version;
}else{
    throw new Error(`Invalid request header: Invalid ${'Version'}`)}

if(request.message.match(/[^\<\>\&\'\"]+/) !== null){
    validRequest.message = request.message;
}else{
    throw new Error(`Invalid request header: Invalid ${'Message'}`)
}

return validRequest;
}

const assert = require('chai').assert;

describe('requestValidator', function() {
  it('should return a valid request object', function() {
    const request = {
      method: 'POST',
      uri: 'http://example.com',
      version: 'HTTP/1.1',
      message: 'Hello World'
    };
    const validRequest = requestValidator(request);
    assert.deepEqual(validRequest, request);
  });

  it('should throw an error for an invalid method', function() {
    const request = {
      method: 'PUT',
      uri: 'http://example.com',
      version: 'HTTP/1.1',
      message: 'Hello World'
    };
    assert.throw(() => requestValidator(request), Error, 'Invalid request header: Invalid Method');
  });

  it('should throw an error for an invalid uri', function() {
    const request = {
      method: 'POST',
      uri: 'http://example.com..',
      version: 'HTTP/1.1',
      message: 'Hello World'
    };
    assert.throw(() => requestValidator(request), Error, 'Invalid request header: Invalid Uri');
  });

  it('should throw an error for an invalid version', function() {
    const request = {
      method: 'POST',
      uri: 'http://example.com',
      version: 'HTTP/3.0',
      message: 'Hello World'
    };
    assert.throw(() => requestValidator(request), Error, 'Invalid request header: Invalid Version');
  });

  it('should throw an error for an invalid message', function() {
    const request = {
      method: 'POST',
      uri: 'http://example.com',
      version: 'HTTP/1.1',
      message: 'Hello <World>'
    };
    assert.throw(() => requestValidator(request), Error, 'Invalid request header: Invalid Message');
  });
});
