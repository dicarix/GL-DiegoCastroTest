'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
    function Modal(target, progress) {
        var _this = this;

        _classCallCheck(this, Modal);

        this._target = target;
        this._progress = progress;
        var link = document.getElementById('link');
        link.addEventListener('mouseover', function () {
            return _this.show();
        });
        link.addEventListener('mouseout', function () {
            return _this.hide();
        });
    }

    _createClass(Modal, [{
        key: 'show',
        value: function show() {
            var _this2 = this;

            document.getElementById('popover-m').style.display = 'block';
            var bar = document.getElementById("progress");
            var width = 1;

            var info = document.getElementById('info');
            info.innerHTML = info.innerHTML.replace('Var-needed', this.required);

            var targetTotal = document.getElementById('target');
            targetTotal.innerHTML = targetTotal.innerHTML.replace('Var-total', this.target);

            document.getElementById('indicatorArrow').style.left = this.percentage - 2 + '%';
            document.getElementById('indicator').style.left = this.percentage - 6 + '%';

            var animation = setInterval(function () {
                if (width >= _this2.percentage) {
                    clearInterval(animation);
                } else {
                    width++;
                    var progress = document.getElementById('indicator');
                    progress.innerHTML = progress.innerHTML.replace('Var-current', _this2.progress);
                    bar.style.width = width + '%';
                }
            }, 10);

            // document.getElementById('popover-m').style.display = 'block';

            // var id = setInterval(function frame() {
            //     
            // }, 10);
        }
    }, {
        key: 'hide',
        value: function hide() {
            document.getElementById('popover-m').style.display = 'none';
            // console.log('hide');
        }
    }, {
        key: 'target',
        get: function get() {
            return this._target;
        }
    }, {
        key: 'progress',
        get: function get() {
            return this._progress;
        }
    }, {
        key: 'percentage',
        get: function get() {
            return this._progress * 100 / this._target;
        }
    }, {
        key: 'required',
        get: function get() {
            return this._target - this._progress;
        }
    }]);

    return Modal;
}();

var modal = new Modal(125, 56);

// var popUpDemo = {};

// popUpDemo.show = function show() {

//     // var currentProgress = 56
//     // var totalProgress = 125
//     // var percentage = (currentProgress * 100) / totalProgress;
//     var bar = document.getElementById("progress");
//     var width = 1;

//     var info = document.getElementById('info').innerHTML;
//     info = info.replace('Var-needed', totalProgress - currentProgress);
//     document.getElementById('info').innerHTML = info;

//     var targetTotal = document.getElementById('target').innerHTML;
//     targetTotal = targetTotal.replace('Var-total', totalProgress);
//     document.getElementById('target').innerHTML = targetTotal;

//     document.getElementById('popover-m').style.display = 'block';
//     document.getElementById('indicatorArrow').style.left = percentage - 2 + '%';
//     document.getElementById('indicator').style.left = percentage - 6 + '%';

//     var id = setInterval(function frame() {
//         if (width >= percentage) {
//             clearInterval(id);
//         } else {
//             width++;
//             document.getElementById('indicator').innerHTML = '$' + parseInt((totalProgress / 100) * width);
//             bar.style.width = width + '%';
//         }
//     }, 10);

// }

// popUpDemo.hide = function hide() {
//     // /document.getElementById('popover-m').style.display = 'none';
// }
