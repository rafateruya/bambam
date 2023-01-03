https://www.hackerrank.com/challenges/three-month-preparation-kit-angry-children/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-five

You will be given a list of integers, , and a single integer . You must create an array of length from elements of such that its unfairness is minimized. Call that array . Unfairness of an array is calculated as

Where:

- max denotes the largest integer in
- min denotes the smallest integer in

Example

Pick any two elements, say .

Testing for all pairs, the solution provides the minimum unfairness.

Note: Integers in may not be unique.

Function Description

Complete the maxMin function in the editor below.
maxMin has the following parameter(s):

int k: the number of elements to select
int arr[n]:: an array of integers
Returns

int: the minimum possible unfairness
Input Format

The first line contains an integer , the number of elements in array .
The second line contains an integer .
Each of the next lines contains an integer where .

Constraints

Sample Input

Sample Input #01

10
4
1
2
3
4
10
20
30
40
100
200
Sample Output

Sample Output #01

3
Explanation

Explanation #01
Here ; selecting the integers , unfairness equals

max(1,2,3,4) - min(1,2,3,4) = 4 - 1 = 3
