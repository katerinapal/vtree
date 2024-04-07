describe("../evaluationProjects/vtree/is-thunk.js:3:1:5:1", () => {
  test("invoc-loc:15:9:15:18-test:0", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/filtered-test-modules/vtree-test-code-merged-entryfile.js:3:1:3:44
    var handleThunk = require("../handle-thunk.js");
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/filtered-test-modules/vtree-test-code-merged-entryfile.js:4:1:4:31
    var VNode = require("../vnode.js");
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/vnode.js:4:1:4:35
    var isThunk = require("../is-thunk.js");
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/filtered-test-modules/vtree-test-code-merged-entryfile.js:20:5:20:40
    var renderedBNode = new VNode("div");
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/filtered-test-modules/vtree-test-code-merged-entryfile.js:22:5:34:5
    var bNode = {
            render: function (previous) {
                //assert.equal(previous, aNode)

                //UPD
                //not invoked, thus not unknown expression
                return renderedBNode
            },
            type: "Thunk",

            //UPD
            renderedBNode: renderedBNode
        };
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/filtered-test-modules/vtree-test-code-merged-entryfile.js:8:5:16:5
    var aNode = {
            render: function (previous) {
                //assert.error("Render should not be called for cached thunk")
            },
            type: "Thunk",
            
            //UPD
            //vnode: new VNode("div")
        };
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/filtered-test-modules/vtree-test-code-merged-entryfile.js:18:5:18:34
    aNode.vnode = new VNode("div");
    var b = {
            render: function (previous) {
                //assert.equal(previous, aNode)

                //UPD
                //not invoked, thus not unknown expression
                return renderedBNode
            },
            type: "Thunk",

            //UPD
            renderedBNode: renderedBNode
        };
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/handle-thunk.js:13:5:13:21
    var renderedB = b;
    var b = renderedB;
    var arg0 = bNode;
    var actualResult = isThunk(arg0);
    var expectedResult = true;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:22:9:22:18-test:1", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/filtered-test-modules/vtree-test-code-merged-entryfile.js:3:1:3:44
    var handleThunk = require("../handle-thunk.js");
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/handle-thunk.js:7:1:7:46
    var renderThunk = require("../render-thunk.js");
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/filtered-test-modules/vtree-test-code-merged-entryfile.js:4:1:4:31
    var VNode = require("../vnode.js");
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/vnode.js:4:1:4:35
    var isThunk = require("../is-thunk.js");
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/handle-thunk.js:12:5:12:21
    var renderedA = a;
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/filtered-test-modules/vtree-test-code-merged-entryfile.js:20:5:20:40
    var renderedBNode = new VNode("div");
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/filtered-test-modules/vtree-test-code-merged-entryfile.js:22:5:34:5
    var bNode = {
            render: function (previous) {
                //assert.equal(previous, aNode)

                //UPD
                //not invoked, thus not unknown expression
                return renderedBNode
            },
            type: "Thunk",

            //UPD
            renderedBNode: renderedBNode
        };
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/filtered-test-modules/vtree-test-code-merged-entryfile.js:8:5:16:5
    var aNode = {
            render: function (previous) {
                //assert.error("Render should not be called for cached thunk")
            },
            type: "Thunk",
            
            //UPD
            //vnode: new VNode("div")
        };
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/filtered-test-modules/vtree-test-code-merged-entryfile.js:18:5:18:34
    aNode.vnode = new VNode("div");
    var b = {
            render: function (previous) {
                //assert.equal(previous, aNode)

                //UPD
                //not invoked, thus not unknown expression
                return renderedBNode
            },
            type: "Thunk",

            //UPD
            renderedBNode: renderedBNode
        };
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/handle-thunk.js:13:5:13:21
    var renderedB = b;
    var b = renderedB;
    var a = renderedA;
    ///home/katerina/visualStudioGit/evaluationProjects/vtree/handle-thunk.js:16:9:16:37
    renderedB = renderThunk(b, a);
    var a = {
            render: function (previous) {
                //assert.error("Render should not be called for cached thunk")
            },
            type: "Thunk",
            
            //UPD
            //vnode: new VNode("div")
        };
    var arg0 = aNode;
    var actualResult = isThunk(arg0);
    var expectedResult = true;
    expect(expectedResult).toBe(actualResult);
  });
});

