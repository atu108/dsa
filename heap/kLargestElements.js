/*
Problem => 
    Given an array. Find k largest elements.

    Sol:-
    1) Sort the array and print k from last index (k + nlogn)
    2) Create a max heap and print k elements from top (n + klogn)
    3) i) Create a min heap of k elements
      ii) Compare elements from k+1 to n-1  with top element if smaller ignore else 
          remove top and insert element  (k + (n-k)logk)
*/
