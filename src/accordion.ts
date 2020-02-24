export function accordion() {
    const accordion_containers = document.getElementsByClassName('accordion');
    for (let i = 0; i < accordion_containers.length; i++) {
        if (accordion_containers[i]) {
            const accordion_triggers = accordion_containers[i].getElementsByTagName('a');
            const accordion_content = accordion_containers[i].getElementsByTagName('p');
            for (let j = 0; j < accordion_triggers.length; j++) {
                accordion_triggers[j].onclick = function () {
                    if (accordion_content[j].classList.contains('open')) {
                        accordion_content[j].classList.remove('open');
                    } else {
                        accordion_content[j].classList.add('open');
                    }
                }
            }
        }
    }
}
