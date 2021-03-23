export class Accordion {
    containers: HTMLCollection;
    listItems: HTMLCollectionOf<HTMLLIElement> | undefined;
    triggers: HTMLCollectionOf<HTMLAnchorElement> | undefined;
    triggersArray: Array<HTMLAnchorElement> | undefined;
    listItemsArray: Array<HTMLLIElement> | undefined;
    constructor() {
        this.containers = document.getElementsByClassName('accordion');
        let containers_array = Array.from(this.containers);
        containers_array.map(c => {
            this.listItems = c.getElementsByTagName('li');
            this.triggers = c.getElementsByTagName('a');
            this.filter_triggers();
            this.filter_list_items();
            this.toggle_open();
        });
        this.set_styles();
    }
    toggle_open() {
        console.log(this.triggersArray);
        console.log(this.listItemsArray);
        if (this.triggersArray && this.listItemsArray) {
            for (let i = 0; i < this.triggersArray.length; i++) {
                let li = this.listItemsArray[i];
                this.triggersArray[i].addEventListener('click', function () {
                    if (li.classList.contains('open')) {
                        li.classList.remove('open');
                    } else {
                        li.classList.add('open');
                    }
                })
            }
        }
    }
    filter_triggers() {
        if (this.triggers) {
            this.triggersArray =  Array.from(this.triggers).filter(t => {
                if (t.parentElement) {
                    if (t.parentElement.nodeName  !== 'DIV') {
                        return t
                    }
                }
            })
        }
    }
    filter_list_items() {
        if (this.listItems) {
            this.listItemsArray =  Array.from(this.listItems).filter(t => {
                if (t.parentElement) {
                    if (t.parentElement.classList.contains('accordion')) {
                        return t
                    }
                }
            })
        }
    }
    set_styles() {
        let style: HTMLStyleElement = document.createElement('style');
        if (style) {
            document.head.appendChild(style);
            let sheet: CSSStyleSheet | null = style.sheet as CSSStyleSheet;
            if (sheet) {
                sheet.insertRule('ul.accordion { list-style: none }');
                sheet.insertRule('ul.accordion li div { display: none }');
                sheet.insertRule('ul.accordion li.open div { display: block !important }');
            }
        }
    }
}