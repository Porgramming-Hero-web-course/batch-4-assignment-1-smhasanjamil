const removeDuplicates = (nums: number[]): number[] => {
  return [...new Set(nums)];
};

removeDuplicates([1, 1, 3, 4, 4, 5, 6, 6, 7]);