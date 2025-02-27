import { localHostUserToMOdel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async( page = 1 ) => {
    const url = `${ import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.pages < page) return [];
    const users = data.data.map( user => localHostUserToMOdel(user));
    
    return users;
}