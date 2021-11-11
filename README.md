# PLC-getting-lexical
This is the repository for my lexical homework

Problem 1:
Conway-s-Game-Of-Life-master is the implementation using 2d jagged arrays we were given.
Conways_Game_Of_Life_Singular_Array is my implementation using a single array.
My version with the single array is faster because it avoids the extra reference that is required for a 2d array.
Every time the 2d(jagged) version runs, it has to get a reference to a reference for each cell.
The single array implementation only has a single reference required to get to each cell index, so of course it will be faster.

Problem 2:
front.c file acts as lexical analyzer for an input file called front.in

Problem 3:
array_testing.cpp creates a static array, a stack dynamic array, and a heap dynamic array of 5000 elements each and prints the time required for each function.
The static array is the fastest, followed by stack dynamic, and finally heap dynamic.
The static array has its memory allocated at compile time, so it is the fastest method.
The stack dynamic array is a locally defined array that is stored in the stack memory(LIFO) for quick access.
The heap dynamic array is stored in the heap memory, giving it the most flexibility but also the slowest performance.
