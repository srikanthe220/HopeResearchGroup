var _ = require('lodash');
var array = require('lodash/array');

//console.log(MainArray)
//array to check columns : transposes columns to rows to check 
var isValid=true;
//ensures that each column and row in an array does not contain duplicates
function checkColumnorRowCondition(arr){
    var testarr = arr;
     for(let i=0;i<testarr.length;i++){
        // console.log(testarr[i])
        var dup=isDuplicate(testarr[i].sort())
       // console.log(dup)
            if(dup)
               return false
     }
     return true;     
}

function isDuplicate(arr){
     for(let i=0;i<arr.length-1;i++){
         if(arr[i] == arr[i+1] ){
             console.log("duplicate found in a row/col")
             return true
         }
     }
     return false;

}
// this function ensures that all the elements in an array lies in between 1 to 9
function allNumbersShouldBeinRange(arr){
   // console.log(array.flattenDepth(arr))
    var checkArray=array.flattenDepth(arr);
    for(var i=0;i<checkArray.length;i++){
        if(checkArray[i]>0 && checkArray[i]<10)
           isValid=true;
           else{
               console.log("Numbers is not in range")
               return false;
           }
    }
    return isValid
}

function validateGrid(grid){
    //console.log("===============validating grid start==============")
    var validation=isDuplicate(array.flatten(grid).sort())
    //console.log(validation)
   // console.log("================validating grid end===============")
   if(validation){
       console.log("found duplicate in a grid: ",grid)
   }
    return !(validation)
}
//this function divides the rows and columns into forms three grids at a time and check if all the numbers are present in a square grid
function main(arr){
   // console.log(arr)
     array.chunk(arr,3).map(function(ele,i){
        var grid1=[];
        var grid2=[];
        var grid3=[];
       
        ele.map((e,i)=>{
            
             var threeD=array.chunk(e,3);
             threeD.map((er,index)=>{
    
                   
                   if(index == 0)
                    grid1.push(er);
                    if(index == 1)
                    grid2.push(er)
                    if(index == 2)
                    grid3.push(er);
             })
             
    
        })
       
        if(!(validateGrid(grid1) && validateGrid(grid2) && validateGrid(grid3))){
                isValid=false;
        }
               
    });

return isValid
}


 function validateSuduku(arr){
    var MainArray=[]
    arr.map((ele)=>{
        MainArray.push(ele.map((e)=>{
            return e;
        }))
    })
    var colCheckArray=array.zip(...arr)
    console.log(allNumbersShouldBeinRange(arr) && checkColumnorRowCondition(colCheckArray) && checkColumnorRowCondition(arr) && main(MainArray))
 }
module.exports={
    validateSuduku:validateSuduku
}