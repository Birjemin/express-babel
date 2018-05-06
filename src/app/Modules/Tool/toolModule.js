export function jsonWrite(res, ret) {
    (typeof ret == 'undefined')
        ? res.json({ code: 0, msg: '操作失败' }) : res.json({ code: 0, msg: '成功', data: ret });
}