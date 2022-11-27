import axios from "axios";


class TourServicio{

    getTours(id_reserva){
        
        return axios.get(`http://turismorealbackend-env.eba-2xh2p8ax.sa-east-1.elasticbeanstalk.com/api/v1/tours/${id_reserva}`);
    }
}

export default new TourServicio()