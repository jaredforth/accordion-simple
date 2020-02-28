export class Accordion {
    containers: HTMLCollection;
    listItems: HTMLCollectionOf<HTMLLIElement> | undefined;
    triggers: HTMLCollectionOf<HTMLAnchorElement> | undefined;
    constructor() {
        this.containers = document.getElementsByClassName('accordion');
        let containers_array = Array.from(this.containers);
        containers_array.map(c => {
            this.listItems = c.getElementsByTagName('li');
            this.triggers = c.getElementsByTagName('a');
            this.toggle_open();
        });
        this.set_styles();
    }
    toggle_open() {
        if (this.triggers && this.listItems) {
            for (let i = 0; i < this.triggers.length; i++) {
                let li = this.listItems[i];
                this.triggers[i].onclick = function () {
                    if (li.classList.contains('open')) {
                        li.classList.remove('open');
                    } else {
                        li.classList.add('open');
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
                sheet.insertRule('.accordion li.open p { display: block }');
            }
        }
    }
}
