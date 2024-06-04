


class ServerConfig {

    ServerUrl="http://work.syfckj.cn";

    ServerUrl2="http://localhost:83";

    constructor () {

    }

    init (_serverUrl=null) {
        if(_serverUrl!=null){
            this.ServerUrl = _serverUrl;
        }

    }
}

export default ServerConfig