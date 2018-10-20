import AuthService from '../auth/AuthService';

class BaseService {
    //constructor() {}
    public static authService = new AuthService();

    static get GET() { return 'GET'; }
    static get POST() { return 'POST'; }
    static get PUT() { return 'PUT'; }
    static get DELETE() { return 'DELETE'; }

    get Url() { return "/api"; }

    AuthLogic(xhr) {
        let jwt = ""; //authService.getAccessToken();

        xhr.setRequestHeader('Authorization', jwt);
    }

    SendRequest(method, postData = null, overrideJwt = null) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            let url = this.Url;

            switch(method) {
                case BaseService.GET:
                    if(postData) {
                        if(typeof postData === 'object') {
                            url = url + "?" + ObjectUtils.BuildQueryString(postData);
                        } else {
                            url = url + "/" + postData;
                        }
                    }
                    break;
                case BaseService.POST:
                    //xhr.setRequestHeader('Content-type', 'application/json');
                    break;
                case BaseService.PUT:
                    //xhr.setRequestHeader('Content-type', 'application/json');
                    break;
                case BaseService.DELETE:
                    if(postData) {
                        url = url + "/" + postData;
                    }
                    break;
            }

            xhr.open(method, url);

            this.AuthLogic(xhr, overrideJwt);

            xhr.setRequestHeader('Content-type', 'application/json');

            xhr.onload = () => {
                if (xhr.status === 200) {
                    let result = JSON.parse(xhr.responseText);

                    resolve(result);
                } else {
                    try {
                        reject({ message: "invalid response.", xhr: xhr, data: JSON.parse(xhr.responseText) });
                    } catch(e) {
                        reject({ message: "invalid response.", xhr: xhr, data: xhr.responseText, exception: e });
                    }
                }
            };

            //TODO: This is ugly. Make less ugly
            if(method === BaseService.DELETE || method === BaseService.GET) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(postData));
            }
        });
    }
}

export default BaseService;
