const arr = [1, 3, 5, 3, 34];
const obj = {
  name: "dddd",
  adderes: "dfdf3333",
  job: "junior js",
};

const obj2 = {
  person: "eeeee",
  isJob: "false",
};

const objJoin = {
  ...obj,
  ...obj2,
};

console.log(objJoin);
console.log(Object.assign({}, obj, obj2));
// {type:'dddddsfsf',paylod:'dfdfdfdfd'}
// const reducer =(state,action)=>{
//    if(action.type ==='up')
//    return state : up
// if(action .type)

//     return state
// }
