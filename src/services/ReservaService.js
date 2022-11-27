import axios from "axios";


class reservaService{

    getReserva(id){
        
        return axios.get(`http://turismorealbackend-env.eba-2xh2p8ax.sa-east-1.elasticbeanstalk.com/api/v1/lista_reserva/${id}`);
    }
}

export default new reservaService()