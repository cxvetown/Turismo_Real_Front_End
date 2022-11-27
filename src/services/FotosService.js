import axios from "axios";


class fotosService{

    getFotos(id_depto){
        
        return axios.get(`http://turismorealbackend-env.eba-2xh2p8ax.sa-east-1.elasticbeanstalk.com/api/v1/fotosDepartamento/${id_depto}`);
    }
}

export default new fotosService()