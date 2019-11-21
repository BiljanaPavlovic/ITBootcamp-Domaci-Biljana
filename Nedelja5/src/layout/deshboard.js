import Header from './heder.js'
import Content from './content'

export class Dashboard{
    constructor(){
        const dashboard=document.getElementById('dashboard');
        const header = new Header();
        const content = new Content();
        dashboard.innerHTML+='<h1>Dasboard</hr>';
        dashboard.innerHTML+=header.getHtml();
        dashboard.innerHTML+=content.getHtml();
        console.log('Init dashboard');
    }
}