"use strict";

function _instanceof(left, right) {
    if (
        right != null &&
        typeof Symbol !== "undefined" &&
        right[Symbol.hasInstance]
    ) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

function _toConsumableArray(arr) {
    return (
        _arrayWithoutHoles(arr) ||
        _iterableToArray(arr) ||
        _unsupportedIterableToArray(arr) ||
        _nonIterableSpread()
    );
}

function _nonIterableSpread() {
    throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
        return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}

function _classCallCheck(instance, Constructor) {
    if (!_instanceof(instance, Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

/**
 * Call a function when the url of an array of node <a> link.
 */
var currentPage = /*#__PURE__*/ (function () {
    function currentPage(nodes, className) {
        _classCallCheck(this, currentPage);

        this.nodes = nodes;
        this.className = className;
        this.url = window.location.href;
        this.pathname = window.location.pathname;
        this.file = window.location.pathname.split("/").reverse()[0];
    }

    _createClass(currentPage, [
        {
            key: "page",
            value: function page() {
                var _this = this;

                _toConsumableArray(this.nodes).forEach(function (nodeElt) {
                    return nodeElt.classList.remove(_this.className);
                });

                node.classList.add(this.className);
            },
        },
        {
            key: "test",
            value: function test() {
                var _this2 = this;

                _toConsumableArray(this.nodes).forEach(function (node) {
                    if (node.href == url) {
                        _this2.page(node);
                    } else if (node.pathname == pathname) {
                        _this2.page(node);
                    } else if (node.pathname.split("/").reverse()[0] == file) {
                        _this2.page(node);
                    }
                });
            },
        },
        {
            key: "init",
            value: function init() {
                this.text();
            },
        },
    ]);

    return currentPage;
})();