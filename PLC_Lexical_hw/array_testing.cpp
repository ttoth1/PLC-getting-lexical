/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <iostream>
#include <time.h>

const int ARRAY_SIZE = 5000;

void arrayStatic();
void arrayStack();
void arrayDynamic();

int main(){
    arrayStatic();
    arrayStack();
    arrayDynamic();
}


void arrayStatic(){
    clock_t start;
    double duration;

    static int arr[ARRAY_SIZE];
    for(int i; i < ARRAY_SIZE; i++){
        arr[i] = 0;
    }
    duration = (clock() - start ) / (double) CLOCKS_PER_SEC;

    std::cout<<"arrayStatic: "<< duration <<'\n';
}
void arrayStack(){
    clock_t start;
    double duration;

    int arr[ARRAY_SIZE];
    for(int i; i < ARRAY_SIZE; i++){
        arr[i] = 0;
    }
    duration = (clock() - start ) / (double) CLOCKS_PER_SEC;

    std::cout<<"arrayStack: "<< duration <<'\n';
}
void arrayDynamic(){
    clock_t start;
    double duration;

    int* arr = new int[ARRAY_SIZE];
    for(int i; i < ARRAY_SIZE; i++){
        arr[i] = 0;
    }
    duration = (clock() - start ) / (double) CLOCKS_PER_SEC;

    std::cout<<"arrayDynamic: "<< duration <<'\n';
}
