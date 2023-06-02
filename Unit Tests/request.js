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
console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'hello'
  }));