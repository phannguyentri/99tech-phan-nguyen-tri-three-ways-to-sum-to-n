# Three Ways to Sum to n

This repository contains three different implementations of a function that calculates the sum of all integers from 1 to n.

## Problem Statement

Given an integer `n`, calculate the sum of all integers from 1 to n.

Example: `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`

Assumption: The input will always produce a result less than `Number.MAX_SAFE_INTEGER` (9,007,199,254,740,991).

## Implementations

### 1. Iterative Approach (sum_to_n_a)

```typescript
function sum_to_n_a(n: number): number {
  if (n < 0) return 0;
  
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
```

**Analysis:**
- **Time Complexity:** O(n) - We iterate through each number from 1 to n once
- **Space Complexity:** O(1) - We only use a single variable to store the sum
- **Pros:** Simple to understand and implement
- **Cons:** Less efficient for large values of n compared to the mathematical approach

### 2. Mathematical Approach (sum_to_n_b)

```typescript
function sum_to_n_b(n: number): number {
  if (n < 0) return 0;
  
  return (n * (n + 1)) / 2;
}
```

**Analysis:**
- **Time Complexity:** O(1) - Constant time regardless of input size
- **Space Complexity:** O(1) - We only use a single variable
- **Pros:** Most efficient approach, works in constant time
- **Cons:** Requires knowledge of the mathematical formula
- **Mathematical Explanation:** This uses the formula for the sum of an arithmetic sequence: sum = n(first + last)/2, which simplifies to n(n+1)/2 when summing from 1 to n

### 3. Recursive Approach (sum_to_n_c)

```typescript
function sum_to_n_c(n: number): number {
  if (n <= 0) return 0;
  
  return n + sum_to_n_c(n - 1);
}
```

**Analysis:**
- **Time Complexity:** O(n) - We make n recursive calls
- **Space Complexity:** O(n) - The call stack grows to size n
- **Pros:** Elegant and demonstrates recursive problem-solving
- **Cons:** 
  - Least efficient approach due to call stack overhead
  - Risk of stack overflow for large values of n
  - Higher space complexity than the other approaches

## Comparison

| Approach | Time Complexity | Space Complexity | Best Use Case |
|----------|----------------|------------------|---------------|
| Iterative | O(n) | O(1) | General purpose, easy to understand |
| Mathematical | O(1) | O(1) | Most efficient for all inputs |
| Recursive | O(n) | O(n) | Educational purposes, small inputs |

## Performance Considerations

For very large values of n, the mathematical approach is significantly more efficient. However, all approaches are subject to the JavaScript number precision limit (`Number.MAX_SAFE_INTEGER`).

The recursive approach should be avoided for large values of n due to the risk of stack overflow errors. 