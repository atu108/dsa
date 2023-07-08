function minDistance(blocks, requireMents) {
  let blockMap = {};
  for (let i = 0; i < blocks.length; i++) {
    let currentBlock = blocks[i];
    let distance = new Array(requireMents.length).fill(0);
    requireMents.forEach((req, k) => {
      if (currentBlock[req]) {
        distance[k] = 0;
      } else {
        let minDist = Infinity;
        for (let j = i - 1; j >= 0; j--) {
          if (blocks[j][req]) {
            minDist = Math.min(minDist, i - j);
          }
        }
        for (let j = i + 1; j < blocks.length; j++) {
          if (blocks[j][req]) {
            minDist = Math.min(minDist, j - i);
          }
        }
        distance[k] = minDist;
      }
    });
    blockMap[i] = distance;
  }
  console.log(blockMap);
}

const blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
];

const requireMents = ["gym", "school", "store"];
console.log(minDistance(blocks, requireMents));
