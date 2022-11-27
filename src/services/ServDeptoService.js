import axios from "axios";


class servDeptoServicio{

    getServicios(id_foto){
        return axios.get(`http://turismorealbackend-env.eba-2xh2p8ax.sa-east-1.elasticbeanstalk.com/api/v1/lista_servicios_dpto/${id_foto}`);
    }
}

export default new servDeptoServicio()