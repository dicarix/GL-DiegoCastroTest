class Modal {
    constructor(target, progress) {
        this._target = target;
        this._progress = progress;
        const link = document.getElementById('link');
        link.addEventListener('mouseover', () => this.show());
        link.addEventListener('mouseout', () => this.hide());
    }

    get target() {
        return this._target;
    }

    get progress() {
        return this._progress;
    }

    get percentage() {
        return (this._progress * 100) / this._target;
    }
    get required() {
        return this._target - this._progress;
    }
    show() {
        document.getElementById('popover-m').style.display = 'block';
        let bar = document.getElementById("progress");
        let width = 1;

        const info = document.getElementById('info');
        info.innerHTML = info.innerHTML.replace('Var-needed', this.required);

        const targetTotal = document.getElementById('target');
        targetTotal.innerHTML = targetTotal.innerHTML.replace('Var-total', this.target);

        document.getElementById('indicatorArrow').style.left = this.percentage - 2 + '%';
        document.getElementById('indicator').style.left = this.percentage - 6 + '%';

        let animation = setInterval(() => {
            if (width >= this.percentage) {
                clearInterval(animation);
            } else {
                width++;
                const progress = document.getElementById('indicator');
                progress.innerHTML = progress.innerHTML.replace('Var-current', this.progress);
                bar.style.width = width + '%';
            }
        }, 10);
    }
    hide() {
        document.getElementById('popover-m').style.display = 'none';
    }
}
let modal = new Modal(125, 56);
