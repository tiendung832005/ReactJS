function parseInput(a: "number" | "string" | "boolean" | "null" | "undefined"){
    switch(a){
        case "number":
            return 1;
        case "string":
            return "hihi";
        case "boolean":
            return true;
        case "null":
            return null;
        case "undefined":
            return undefined;
    }
}
    console.log(parseInput("number"));
    console.log(parseInput("string"));
    console.log(parseInput("boolean"));
    console.log(parseInput("null"));
    console.log(parseInput("undefined"));
