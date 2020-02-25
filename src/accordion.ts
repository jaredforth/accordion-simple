export class Accordion {
    containers: HTMLCollection;
    triggers: HTMLCollectionOf<HTMLAnchorElement> | undefined;
    content: HTMLCollectionOf<HTMLParagraphElement> | undefined;
    constructor() {
        this.containers = document.getElementsByClassName('accordion');
        for (let i = 0; i < this.containers.length; i++) {
            if (this.containers[i]) {
                this.triggers = this.containers[i].getElementsByTagName('a');
                this.content = this.containers[i].getElementsByTagName('p');
                this.toggle_open();
            }
        }
    }
    toggle_open() {
        if (this.triggers && this.content) {
            for (let i = 0; i < this.triggers.length; i++) {
                let content = this.content[i];
                this.triggers[i].onclick = function () {
                    if (content.classList.contains('open')) {
                        content.classList.remove('open');
                    } else {
                        content.classList.add('open');
                    }
                }
            }
        }
    }
}
