class modal {
    constructor(popup, background, closeBtn){
      this.popup = popup;
      this.background = background;
      this.closeBtn = closeBtn;
    }
    
    listeners() {
        window.addEventListener("click", (e) => {
            e.stopPropagation();
            if (e.target === this.background){
                this.popup.style.display = "none";
                this.background.style.display = "none";
            }
        })

        this.closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            this.popup.style.display = "none";
            this.background.style.display = "none";
        });

        if (this.isMobile()){
            window.addEventListener("scroll", ()=>{
                this.popup.style.display = "none";
                this.background.style.display = "none";
            })
        }
    }

    isMobile() {
        let whatUser = navigator.userAgent;
        if (whatUser.match(/Android/i)
            || whatUser.match(/Iphone/i)
            || whatUser.match(/webOS/i)
            || whatUser.match(/Ipad/i)
            || whatUser.match(/Ipod/i)
            || whatUser.match(/BlackBerry/i)
            || whatUser.match(/Windows Phone/i)) {
            return true;
        } else {
            return false;
        }
    }

    init(){
        this.listeners();
    }
}