exports.handler=function(event,context,callback){
    // const secretContent=
    // <h3>Welcome to secret area</h3>
    // <p>Here you can tell that the <strong>sky</strong> is blue, and two plus two equals four</p>
    let body
    if(event.body){
        body=JSON.parse(event.body)
    }else{
        body={}
    }
    if(body.password=="javascript"){
        callback(null,{
            statusCode:200,
            body:"Welcome to the super secret area"
            // body:secretContent
        })
    }else{
        callback(null,{
            statusCode:401
        })
    }

    

}