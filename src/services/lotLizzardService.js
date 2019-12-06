import BaseAxiosService  from './baseAxiosService';

class LotLizzardService {
        constructor() {
        this.httpService = new BaseAxiosService('https://anypoint.mulesoft.com/mocking/api/v1/links/56e3fea0-8f3b-4924-9d63-5bee1c55b7d8/api');
    }

    getParkingLots() {
        return this.httpService.request('/parking-lots').then(response => {
            console.log(response);
        })
    }

    getParkingLot(id){
        return this.httpService.request('/parking-lots/'+id).then(response => {
            console.log(response);
        })
    }

    getParkingSpaces(id){
        return this.httpService.request('/parking-lots/'+id+"/spaces").then(response => {
            console.log(response);
        })
    }

    getParkingSpace(lot,space){
        return this.httpService.request('/parking-lots/'+lot+"/spaces/"+space).then(response => {
            console.log(response);
        })
    }
}

export default new LotLizzardService();