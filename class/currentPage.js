/**
 * Call a function when the url of an array of node <a> link.
 */

class currentPage{
    constructor(nodes, callback){
        this.nodes = nodes;
        this.url = window.location.href;
        this.pathname = window.location.pathname;
        this.file = window.location.pathname.split("/").reverse()[0];
        this.callback = callback;
    }

    test(){
        [...this.nodes].forEach((node, i) => {
            if (node.href == this.url){
                this.callback(node);
            }else if (node.href == this.pathname){
                this.callback(node);
            }else if (node.href == this.file){
                this.callback(node);
            }
        });
    }
}