const sumArray = (nums: number[]): number => {
  return nums.reduce((total, num) => total + num, 0);
};

sumArray([3, 2, 9, 7, 5]);