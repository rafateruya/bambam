https://www.hackerrank.com/challenges/three-month-preparation-kit-an-interesting-game-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-six

Andy wants to play a game with his little brother, Bob. The game starts with an array of distinct integers and the rules are as follows:

Bob always plays first.
In a single move, a player chooses the maximum element in the array. He removes it and all elements to its right. For example, if the starting array , then it becomes after removing .
The two players alternate turns.
The last player who can make a move wins.
Andy and Bob play games. Given the initial array for each game, find and print the name of the winner on a new line. If Andy wins, print ANDY; if Bob wins, print BOB.

To continue the example above, in the next move Andy will remove . Bob will then remove and win because there are no more integers to remove.

Function Description

Complete the gamingArray function in the editor below.

gamingArray has the following parameter(s):

int arr[n]: an array of integers
Returns

- string: either ANDY or BOB

Input Format

The first line contains a single integer , the number of games.

Each of the next pairs of lines is as follows:

The first line contains a single integer, , the number of elements in .
The second line contains distinct space-separated integers where .
Constraints

Array contains distinct integers.
For of the maximum score:

The sum of over all games does not exceed .
For of the maximum score:

The sum of over all games does not exceed .
