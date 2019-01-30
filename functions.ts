function str1(input:string): number
{
    let count : number = input.length;
    return count;
}//str1

console.log("String length with spaces: " +str1("test 1"));

function str2_noSpaces(input:string) :number
{
    let count: number = input.replace(/\s+/, "").length; 
    return count;
}//str2

console.log("String length with no spaces: " + str2_noSpaces("test 1"));

function combine(value: string, spaces: boolean=false): number
{
    let num: number; 
    if(spaces)
    { 
        num = value.replace(/\s+/, "").length;
    }
     else
     { num = value.length; 
    }
     return num;
}//combine

console.log("Function combined: String length with spaces and all is," +
        "not setting spaces parameter so will default to false: " +combine("test 1"));