/**
 * E27
 * Created by Mary on 2/6/2017.
 */

const letterTest = ['a', 'b', 'c'];
const numberTest = [1, 2, 3];

function zipList(letter, number){
  const newList = [];
  for(let i = 0; i < letter.length; i++){
    newList.push(letter[i], number[i]);
  }
  return newList;
}

console.log(zipList(letterTest, numberTest));

function zipListTheSimpleWay(letter, number){
  return _.flatten(_.zip(letter, number));
}

console.log(zipListTheSimpleWay(letterTest, numberTest));