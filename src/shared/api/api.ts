

interface IUser {
    success: string,
    actionsHistory: [],
    email: string,
    token: string,
    _id: string,
    __v: number
}


class API {
    private static serverURL = "http://localhost:5000/";


    // private static parseQuey

    public static api<T>(url: string, query?: {}):Promise<T> {
        const currentUrl = query ? this.serverURL + url + '?' + new URLSearchParams(query) : this.serverURL+url
        return fetch(currentUrl).then(response=>{
            if(response.ok) {
                throw new Error("");
            }
            return response.json() as Promise<T>
        })
    }

    public static post<T>(url: string, params:{email: string, password:string}, query?: {}): Promise<T> {
        const currentUrl = query ? this.serverURL + url + '?' + new URLSearchParams(query) : this.serverURL+url
        return fetch(currentUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        }).then(response=>{
            console.log(response);
            if(!response.ok) {
                throw new Error("");
            }
            return response.json() as Promise<T>
        })
    }

    public static login(email: string, password: string) {

        return this.post<IUser>('auth/login', {email, password}).then(data=>{
            console.log(data.token);
            localStorage.setItem('token', data.token)
        })
    }

    public static getAuth() {
        return "Bearer " + localStorage.getItem('token')
    }

    public static checkAuth() {
        if(localStorage.getItem('token')) return true
        return false;
    }
}

export default API