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

    getParkingSpaces(id, point) {
        return this.httpService.request(`/parking-lots/${id}/spaces`).then(response => {
            var places = response.data.map(function(element) {
                var numberFromRowLetter = element.row.charCodeAt(0) - 65;
                var sideOffset = element.side === "RIGHT" ? 0.5 : 0;
                
                element.y = numberFromRowLetter + sideOffset;
                element.x = (element.column - 1) + sideOffset;

                return element;
            });
            
            return this._sortByDistance(point, places);
        });
    }

    getParkingSpace(lot,space){
        return this.httpService.request(`/parking-lots/${lot}/spaces/${space}`).then(response => {
            console.log(response);
        })
    }

    _distanceBetweenPoints(p1, p2) {
        return Math.abs(Math.sqrt((p1[0] - p2.x) * (p1[0] - p2.x) + (p1[1] - p2.y) * (p1[1] - p2.y)));
    }
    
    _sortByDistance(location, arrayOfPoints) {
        var that = this;
        arrayOfPoints.sort(function (a, b) {
            a.distance = that._distanceBetweenPoints(location, a);
            b.distance = that._distanceBetweenPoints(location, b);
            return a.distance - b.distance;
        });
        return arrayOfPoints;
    }
}

export default new LotLizzardService();