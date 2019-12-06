import BaseAxiosService  from './baseAxiosService';

class LotLizzardService {
        constructor() {
        this.httpService = new BaseAxiosService('http://sandbox-parking-api.us-e2.cloudhub.io/api');
    }

    getParkingLots() {
        return this.httpService.request('/parking-lots').then(response => {
            console.log(response);
        })
    }

    getParkingLot(id){
        return this.httpService.request(`/parking-lots/${id}`).then(response => {
            console.log(response);
        })
    }

    getParkingSpaces(id){
        return this.httpService.request(`/parking-lots/${id}/spaces`).then(response => {
            console.log(response);
        })
    }

    getParkingSpace(lot,space){
        return this.httpService.request(`/parking-lots/${lot}/spaces/${space}`).then(response => {
            console.log(response);
        })
    }
}

export default new LotLizzardService();