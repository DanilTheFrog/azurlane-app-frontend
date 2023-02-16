export function getAuth() {
    return "Bearer " + localStorage.getItem('token')
}