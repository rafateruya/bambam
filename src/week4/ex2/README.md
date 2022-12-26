https://www.hackerrank.com/challenges/three-month-preparation-kit-array-left-rotation/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-four&h_r=next-challenge&h_v=zen

A left rotation operation on an array of size shifts each of the array's elements unit to the left. Given an integer, , rotate the array that many steps left and return the result.

Example

After rotations, .

Function Description

Complete the rotateLeft function in the editor below.

rotateLeft has the following parameters:

int d: the amount to rotate by
int arr[n]: the array to rotate
Returns

int[n]: the rotated array
Input Format

The first line contains two space-separated integers that denote , the number of integers, and , the number of left rotations to perform.
The second line contains space-separated integers that describe .

Constraints

Sample Input

5 4
1 2 3 4 5
Sample Output

5 1 2 3 4
Explanation

To perform left rotations, the array undergoes the following sequence of changes:
