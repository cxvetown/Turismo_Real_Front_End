import axios from "axios";


class servExtraService{

    getServExtra(id_reserva){
        
        return axios.get(`http://turismorealbackend-env.eba-2xh2p8ax.sa-east-1.elasticbeanstalk.com/api/v1/allService/${id_reserva}`);
    }
}

export default new servExtraService()