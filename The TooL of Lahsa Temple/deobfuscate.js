var _0x39364e = _0x213e;
(function (_0x55c1eb, _0x493846) {
    var _0x213e = _0x213e,
        _0x42dcaf = _0x55c1eb();
    while (!![]) {
        try {
            var _0x4b45b0 = parseInt('480770RDKyRZ') / 0x1 * (-parseInt('2nxSZes') / 0x2) + parseInt('3338322dTRKfC') / 0x3 + -parseInt('7804SbfZoW') / 0x4 * (parseInt('335DPAWjI') / 0x5) + parseInt(_0x213e(0x1bc)) / 0x6 * (parseInt(_0x213e(0x1ad)) / 0x7) + -parseInt(_0x213e(0x19c)) / 0x8 * (-parseInt(_0x213e(0x1b3)) / 0x9) + -parseInt(_0x213e(0x1af)) / 0xa * (parseInt(_0x213e(0x1ac)) / 0xb) + -parseInt(_0x213e(0x19d)) / 0xc;
            if (_0x4b45b0 === _0x493846) break;
            else _0x42dcaf['push'](_0x42dcaf['shift']());
        } catch (_0x2fb637) {
            _0x42dcaf['push'](_0x42dcaf['shift']());
        }
    }
}(_0x58fd, 0xae682));

function curry(hook_function) {
    var replace_function = _0x213e,
        arr = Array.prototype,
        args = arguments;

    function _0x105e3d() {
        return arr['push']['apply'](_0x105e3d['args'], arguments), _0x105e3d['args']['length'] < hook_function['length'] ? _0x105e3d : hook_function['apply'](this, _0x105e3d['args']);
    }
    return function () {
        return _0x105e3d['args'] = arr['slice']['call'](args, 0x1), _0x105e3d['apply'](this, arguments);
    };
}

function _0x213e(_0x2a0230, _0x13ab82) {
    var _0x58fdc7 = _0x58fd();
    return _0x213e = function (_0x213eb3, _0x353494) {
        _0x213eb3 = _0x213eb3 - 0x19a;
        var _0x3d4ced = _0x58fdc7[_0x213eb3];
        return _0x3d4ced;
    }, _0x213e(_0x2a0230, _0x13ab82);
}

function callback(accumulator, currentValue, index, array) {
    var _0x3e4b92 = _0x213e;
    return !currentValue['call'](accumulator, array[array['length'] - 1 - index].toString()['slice'](13, 15)) ? accumulator : {};
}
var ref = {
    'R': 'HG3',
    'N': 'j2L',
    'j': 'M2L',
    'K': 'L23',
    'w': 'U3A'
};

function validatekey() {
    var _0x2f306b = _0x39364e;
    document.getElementById('innerHTML') = '',
        e = ![];
    var _0x5813a9 = '';
    try {
        _0x5813a9 = document.getElementById('key').value;
        var _0x157139 = _0x5813a9.split('-');
        if (_0x157139['length'] !== 5) e = true; // inputul trebuie sa fie in 5 parti separate de -
        // string urile splituite trebuie sa aiba marimea 4
        var _0x1f0c64 = _0x157139.map(genFunc).reduceRight(callback, new (genFunc(_0x157139[4]))(Function));
        if (!equal(_0x1f0c64, ref)) e = !![];
    } catch (_0x38c7c3) {
        _0x38c7c3 = !![];
    } !e ? document['location']['href']['indexOf'](_0x2f306b(0x1b2)) == -0x1 && (document['getElementById'](_0x2f306b(0x19a))[_0x2f306b(0x1a7)] = 'You are Amazing, now you can retrieve the secret file remember to add extension txt') : document['getElementById'](_0x2f306b(0x19a))['innerHTML'] = _0x2f306b(0x1bb);
}

function equal(input, ref) {
    var _0x5e9524 = _0x39364e,
        ref_keys = Object['keys'](ref),
        input_keys = Object['keys'](input);
    if (ref_keys['length'] != input_keys['length']) return ![];
    for (var i = 0; i < input_keys['length']; i++)
        if (input_keys[i] != ref_keys[i] || input[input_keys[i]] != ref[ref_keys[i]]) return ![];
    return !![];
}

function hook(func_1, func_2, func_3) {
    return function (_0x2a252c) {
        return func_2(func_1(_0x2a252c), func_3(_0x2a252c));
    };
}
var h = curry(hook),
    fn = h(function (_0x519215) {
        return _0x519215 >= 30;
    }, new Function('a', 'b', 'return a && b;'));

function _0x58fd() {
    var _0x4b7024 = ['Test', 'split', '40dwUBPh', '11831436pNmtgJ', '2nxSZes', 'apply', 'keys', '3338322dTRKfC', 'call', '7804SbfZoW', 'map', 'length', 'indexOf', 'innerHTML', 'key', 'this.', 'toString', 'reduceRight', '23650iKiKXM', '2177jtstfb', '480770RDKyRZ', '5690mwERrr', 'M2L', 'substring', '?p=', '2025369RAMvdI', 'return a && b;', 'args', 'value', '335DPAWjI', 'slice', 'getElementById', 'prototype', '<div class=\'alert alert-danger\'>Wrong Key sorry.</div>', '25026vIHDhR'];
    _0x58fd = function () {
        return _0x4b7024;
    };
    return _0x58fd();
}

function genFunc(_0x154e62) {
    var _0x51dbab = _0x39364e;
    if (!_0x154e62 || !_0x154e62.length || _0x154e62['length'] !== 4) return function () { };
    return new Function(_0x154e62.substring(1, 3), "this." + _0x154e62[3] + '=' + _0x154e62['slice'](1, 3) + '+' + (fn(function (_0x24f463) {
        return _0x24f463 <= 39;
    })(_0x154e62['charCodeAt'](0x0)) ? _0x154e62[0x0] : '\'' + _0x154e62[0x0] + '\''));
}
