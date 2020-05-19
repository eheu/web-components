export function defineGlobalVariables(){
    defineHtml();
}

function defineHtml() {
    window.html = function (literate) {
        return literate;
    };
}

function test(test){return test;}