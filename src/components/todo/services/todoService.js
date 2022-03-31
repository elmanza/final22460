class Todo {
    constructor(){
        this.list = [];
    }
    list(){
        return this.list;
    }
    add(tittle){
        return this.list.push({
            tittle,
            complete:false
        });
    }

    getDiez(){
        return 10;
    }
    
    complete(tittle){
        let found = false;
        let lista;
        if(this.list.length == 0) new Error("No hay elementos en la lista de tareas");
        this.list.forEach(element => {
            if(element.tittle == tittle){
                element.complete = true;
                found = true;
                lista = element;
                return;
            }
        });
        if(!found)  new Error("No se encontró la tarea");
        return lista;
    }
}

module.exports = new Todo();