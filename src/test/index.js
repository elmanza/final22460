let todo = require("../components/todo/services/todoService");
let assert = require("assert").strict;


describe("Test de integración", ()=>{
    it("Contenedor de lista vacio", ()=>{
        assert.strictEqual(todo.getDiez(), 10);
    });
})
