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
        this.set_styles();
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
    set_styles() {
        let style: HTMLStyleElement = document.createElement('style');
        if (style) {
            document.head.appendChild(style);
            let sheet: CSSStyleSheet | null = style.sheet as CSSStyleSheet;
            if (sheet) {
                sheet.insertRule('.accordion { list-style: none }');
                sheet.insertRule('.accordion li p { display: none }');
                sheet.insertRule('.accordion li p.open { display: block }');
            }
        }
    }
}
