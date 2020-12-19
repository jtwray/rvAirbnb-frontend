import React, { useMemo } from "react";

const chunkArray = (chunkSize) => (array) => {
  return array.reduce((acc, each, index, src) => {
    if (!(index % chunkSize)) {
      return [...acc, src.slice(index, index + chunkSize)];
    }
    return acc;
  }, []);
};

export const usePagination = (array, size) => {
  const chunkedArray = useMemo(() => chunkArray(size)(array), [size, array]);

  return [chunkedArray];
};


{
  /**
     example usecases 
uses currying to allow partial application
source github: @mattshardman https://gist.github.com/webinista/11240585#gistcomment-2791064
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const chunkArray3 = chunkArray(3);
const chunkArray5 = chunkArray(5);
chunkArray3(array);
// => [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]];
chunkArray5(array);
// => [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]];

let res=chunkArray(3)([1,2,3,4,5,6,7,8,9])
console.log({res}) 
*/
}

// function* ennumerate(iterable, offset = 0) {
//   let i = offset;

//   for (const item of iterable) {
//     yield [i++, item];
//   }
// }

// function* chunkor(iterable, size) {
//   let chunk = [];

//   for (const [index, item] of ennumerate(iterable, 1)) {
//     chunk.push(item);

//     if (index % size === 0) {
//       yield chunk;
//       chunk = [];
//     }
//   }

//   if (chunk.length > 0) yield chunk;
// }

// let otherres = [...chunkor([0, 1, 2, 3, 4, 6, 7, 8, 9], 2)];

// console.log({ otherres });
/*
  > [...chunkor([0,1,2,3,4,6,7,8,9], 2)]
  [ [ 0, 1 ], [ 2, 3 ], [ 4, 6 ], [ 7, 8 ], [ 9 ] ]
  > [...chunkor([0,1,2,3,4,6,7,8,9], 3)]
  [ [ 0, 1, 2 ], [ 3, 4, 6 ], [ 7, 8, 9 ] ]
  */
