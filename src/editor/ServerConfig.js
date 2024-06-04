


class ServerConfig {

    ServerUrl="";


    constructor () {

    }

    init (_serverUrl=null) {
        if(_serverUrl!=null){
            this.ServerUrl = _serverUrl;
        }

    }
}

export default ServerConfig