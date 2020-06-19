/**
 * Call a function when the url of an array of node <a> link.
 */

class currentPage {
    constructor(nodes, className) {
        this.nodes = nodes;
        this.className = className;
        this.url = window.location.href;
        this.pathname = window.location.pathname;
        this.file = window.location.pathname.split("/").reverse()[0];
    }

    page() {
        [...this.nodes].forEach((nodeElt) =>
            nodeElt.classList.remove(this.className)
        );
        node.classList.add(this.className);
    }

    test() {
        [...this.nodes].forEach((node) => {
            if (node.href == url) {
                this.page(node);
            } else if (node.pathname == pathname) {
                this.page(node);
            } else if (node.pathname.split("/").reverse()[0] == file) {
                this.page(node);
            }
        });
    }

    init() {
        this.text();
    }
}