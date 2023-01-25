https://www.hackerrank.com/challenges/three-month-preparation-kit-magic-square-forming/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-six

We define a magic square to be an matrix of distinct positive integers from to where the sum of any row, column, or diagonal of length is always equal to the same number: the magic constant.

You will be given a matrix of integers in the inclusive range . We can convert any digit to any other digit in the range at cost of . Given , convert it into a magic square at minimal cost. Print this cost on a new line.

Note: The resulting magic square must contain distinct integers in the inclusive range .

Example

$s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]]

The matrix looks like this:

5 3 4
1 5 8
6 4 2
We can convert it to the following magic square:

8 3 4
1 5 9
6 7 2
This took three replacements at a cost of .

Function Description

Complete the formingMagicSquare function in the editor below.

formingMagicSquare has the following parameter(s):

int s[3][3]: a array of integers
Returns

int: the minimal total cost of converting the input square to a magic square
Input Format

Each of the lines contains three space-separated integers of row .

Constraints

Sample Input

4 9 2
3 5 7
8 1 5
Sample Output

1
Explanation

Matrix initially looks like this:

4 9 2
3 5 7
8 1 5
Observe that it's not yet magic, because not all rows, columns, and center diagonals sum to the same number.

If we change the bottom right value, , from to at a cost of , becomes a magic square at the minimum possible cost. Thus, we print the cost, , on a new line.
