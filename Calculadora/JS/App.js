const fnShowElement = (value)=>{
    const Campo = document.getElementById('input_display');
    if(Campo.value.length == 0 && isNaN(value)){
        Swal.fire("Debes colocar un numero antes del operador o de un punto");
        return false;
    }

    if(isNaN(Campo.value[(Campo.value.length-1)]) && isNaN(value)){
        return false;
    }
    Campo.value += value
};

const fnClearInput = ()=>{
    document.getElementById('input_display').value = "";
    Swal.fire("Operacion cancelada.!");
};

const fnCalcular = ()=>{
    const Campo = document.getElementById('input_display');
    try{
        if(isNaN(Campo.value[(Campo.value.length-1)])){
            Swal.fire("Debes agregar otro numero para realizar la operacion");
            return false;
        }
        Campo.value = eval(Campo.value);
    }catch(Ex){
        alert(Ex.name, ' - ', Ex.message);
    }
};