import axios from "axios";

const Depto_Rest_Api_Url = "http://turismorealbackend-env.eba-2xh2p8ax.sa-east-1.elasticbeanstalk.com/api/v1/listadoDepto";

class deptoService {

    getDeptos(){
        return axios.get(Depto_Rest_Api_Url);
    }

    getDeptoFiltrado(id_com, check_in1, check_out1){
        return axios.get("http://turismorealbackend-env.eba-2xh2p8ax.sa-east-1.elasticbeanstalk.com/api/v1/deptoFiltrados", {
            id_comuna: id_com, check_in: check_in1, check_out: check_out1
        })
    }
}

export default new deptoService()