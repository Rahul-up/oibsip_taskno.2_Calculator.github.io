function buttonclicked(x){
    switch(x){
        case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":case "0":
            case ".":case "+":case "-":case "*":case "/":case "%":case "(":case ")":
                document.getElementById("screen").value = document.getElementById("screen").value + x;break;
                case "ans":case "enter":
                    try{
                        document.getElementById("screen").value = eval(document.getElementById("screen").value);
                    }catch(e)
                    {
                        document.getElementById("screen").value = "syntax error!";
                    }
                    break;
                case "clear": document.getElementById("screen").value = "";break;
                case "del": var str = document.getElementById("screen").value;
                            str = str.substr(0,str.length-1);
                            document.getElementById("screen").value = str;
                            break;
    }
}