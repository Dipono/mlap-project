console.log(12)
class MyHeader extends HTMLElement{
    connectedCallBack(){
        this.innerHTML = `
            <body>
            <p>you</p>
            </body>
        `
    }
}

customElements.define('my-header',MyHeader)