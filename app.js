var inputLIst = [{
    id: 'e',
    parent_id: 'd',
}, {
    id: 'a',
    parent_id: null,
}, {
    id: 'b',
    parent_id: null,
}, {
    id: 'c',
    parent_id: null,
}, {
    id: 'd',
    parent_id: 'a',
}, {
    id: 'f',
    parent_id: 'e',
}, {
    id: 'g',
    parent_id: 'b',
}, ];

var map = {};
var output = [];

inputLIst.forEach(function(node) {
    map[node.id] = { node: node, children: [] };

    if (node.parent_id == null) {

        output.push(map[node.id]);
    }
    Object.keys(map).forEach(function(key) {

        if (map[key].node.parent_id) {
            map[map[key].node.parent_id].node.children.push[map[key]];
        }
    });

    console.log(output);

});