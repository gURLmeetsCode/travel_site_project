import $ from 'jquery';

class Modal {
    constructor(){
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events(){
        // clicking the open modal 

        this.openModalButton.click(this.openModal.bind(this));

        //  clicking the x btn

        this.closeModalButton.click(this.closeModal.bind(this));

        //  push esc key or any keypress

        $(document).keyup(this.kepPressHandler.bind(this));

    }

    kepPressHandler(e){
        if(e.keyCode == 27){
            this.closeModal();
        }
    }

    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal(){
        this.modal.removeClass("modal--is-visible");

    }

}

export default Modal;