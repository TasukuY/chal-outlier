
let findOutlier = arr => {
    let evenArr = [];
    let oddArr = [];
    arr.forEach(num => {
        if(num%2 === 0){
            evenArr.push(num);
        }else{
            oddArr.push(num);
        }
    });
    if(evenArr.length > oddArr.length){
        return oddArr[0];
    }else{
        return evenArr[0];
    }
}

// function findOutlier(arr){
//     let isEven = isEvenArr(arr);
//     if(isEven){
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i]%2 !== 0){
//                 return arr[i];
//             }
//         }
//     }else{
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i]%2 === 0){
//                return arr[i]; 
//             }
//         }
//     }
// }

// function isEvenArr(arr){
//     let evenArr = [];
//     let oddArr = [];
//     for(let i = 0; i < 3; i++){
//         if(arr[i] % 2 === 0){
//             evenArr.push(arr[i]);
//         }else{
//             oddArr.push(arr[i]);
//         }
//     }
//     return evenArr > oddArr;
// }
//[2, 4, 0, 100, 4, 11, 2602, 36]
//[160, 3, 1719, 19, 11, 13, -21]
let testArr = [2, 4, 0, 100, 4, 11, 2602, 36];
console.log(`The outlier N is ${findOutlier(testArr)}`);