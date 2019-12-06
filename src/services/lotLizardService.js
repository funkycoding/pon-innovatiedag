import BaseAxiosService  from './baseAxiosService';

class LotLizardService {
        constructor() {
        this.httpService = new BaseAxiosService('http://sandbox-parking-api.us-e2.cloudhub.io/api');
    }

    async getParkingLots() {
        return await this.httpService.request('/parking-lots').then(response => { return response.data; });
    }

    getParkingLot(id){
        return this.httpService.request(`/parking-lots/${id}`).then(response => { return response.data; })
    }

    getParkingSpaces(id){
        return this.httpService.request(`/parking-lots/${id}/spaces`).then(response => {
            return response.data;
        })
    }

    getParkingSpace(lot,space){
        return this.httpService.request(`/parking-lots/${lot}/spaces/${space}`).then(response => {
            return response.data;
        })
    }
}

export default new LotLizardService();