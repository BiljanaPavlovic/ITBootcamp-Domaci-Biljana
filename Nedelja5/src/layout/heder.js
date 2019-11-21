import User from '../components/user'

export default class Header{
    constructor(){}
    getHtml(){
        console.log('Init header');
        return `<header>Header${User.getUser()}</header>`;
    }
}