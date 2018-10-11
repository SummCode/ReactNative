class FetchUtils {

    static get(url, params, success, fail) {
        fetch(url, {
            method: 'GET',
            body: params
        }).then((response) => {
            console.log(JSON.stringify(response));
            if (response.ok) {
                return response.json();
            } else {
                return FetchUtils.systemError(response);
            }
        }).then((data) => {
            if (data.errorCode === 0) {
                success(data);
            } else {
                fail(data);
            }
        }).catch((e) => {
            FetchUtils.codeException(e, fail);
        })
    }

    static post(url,params,success,fail){
        fetch(url, {
            method: 'POST',
            body: params
        }).then((response) => {
            console.log(JSON.stringify(response));
            if (response.ok) {
                return response.json();
            } else {
                return FetchUtils.systemError(response);
            }
        }).then((data) => {
            if (data.errorCode === 0) {
                success(data);
            } else {
                fail(data);
            }
        }).catch((e) => {
            FetchUtils.codeException(e, fail);
        })
    }

    static codeException(e, fail) {
        let error = {};
        error.errorCode = -100;
        error.errorMsg = '系统繁忙，稍后再试';
        error.data = {};
        fail(error);
        console.log(e);
    }


    static systemError(response) {
        let code = response.status;
        let error = {};
        error.errorCode = code;
        error.data = {};

        switch (code) {
            case 400:
            case 401:
            case 402:
            case 403:
            case 404:
            case 405:
            case 406:
            case 407:
            case 408:
            case 409:
            case 410:
            case 411:
            case 412:
            case 413:
            case 414:
            case 415:
            case 416:
            case 417:
                error.errorMsg = '请求出错，请稍后再试';
                break;
            case 500:
            case 501:
            case 502:
                error.errorMsg = '系统繁忙，请稍后再试';
                break;
            case 503:
            case 504:
                error.errorMsg = '请求超时，请稍后再试';
                break;
            case 505:
                error.errorMsg = '系统繁忙，请稍后再试';
                break;
            default:
                error.errorMsg = '系统繁忙，稍后再试';
        }
        return error;
    }
}


export default FetchUtils;