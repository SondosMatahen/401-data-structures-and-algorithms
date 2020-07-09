# Merge Sort
## Bushra Bilal

### Intro:

Merge Sort is a Divide and Conquer algorithm that divides arrays in two halves, calls itself for the two halves and then merges the two sorted halves.  
The Merge Sort algorithm is one of the most efficient and most popular sorting algorithms.  

![merge-sort-divide-and-conquer](https://cdn.programiz.com/sites/tutorial2program/files/merge-sort-example_0.png)

We'll be tracing the Merge Sort algorithm using the following psuedocode:
```js
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

and using this array as input:  
`[8,4,23,42,16,15]`

### Procedure:

- we'll keep track of changes in each iteration by following the psuedocode line by line, excuting and reflecting the changes on the array.
- we'll trace the values in tables.
- in each iteration, we compare an element with its previous.

we start with the second element of the array, and evaluate wether or not it is less than the previous element (first element), we find that the second element is less than the first element, so we change the value of the second element to the value of the first element, then we update the value of the first element to the smallest value between the two, which is the value of the second element, we update the values and continue for all elements of the array.

#### Iteration 1:

- `i = 1`
- `j = i -1 = 0`
- `temp = 4`
- `arr = [4, 8, 23, 42, 16, 15]`  

![itreation-1](assets/cc26-1.jpg)

#### Iteration 2:

- `i = 2`
- `j = i -1 = 1`
- `temp = 23`
- `arr = [4, 8, 23, 42, 16, 15]`  
![itreation-2](assets/cc26-2.jpg)

#### Iteration 3:

- `i = 3`
- `j = i -1 = 2`
- `temp = 42`
- `arr = [4, 8, 23, 42, 16, 15]`  
![itreation-3](assets/cc26-3.jpg)

#### Iteration 4:

- `i = 4`
- `j = i -1 = 3`
- `temp = 16`
- `arr = [4, 8, 16, 23, 42, 15]`  
![itreation-4](assets/cc26-4.jpg)

#### Iteration 5:

- `i = 5`
- `j = i -1 = 4`
- `temp = 15`
- `arr = [4, 8, 15, 16, 23, 42]`  
![itreation-5](assets/cc26-5.jpg)