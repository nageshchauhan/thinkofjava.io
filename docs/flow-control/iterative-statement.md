## `while`
When the number of iterations is unknown beforehand, using a **while** loop is the preferred approach.

```java linenums="1"
while(resultSet.next()) {
}

while(enumeration.hasMoreElement()) {
}
```
Syntax:
```java linenums="1"
while (condition) {
// Code to be executed as long as the condition is true
}
```

The condition must evaluate to a boolean type; providing any other type will result in a compile-time error.
```java linenums="1"
//Example:
while(1) { // CE: Incompatible type, found: int, required: boolean
  System.out.println("Hello"); 
}
```

Curly braces are optional in a `while` loop. However, if they are omitted, only a single statement can be placed inside the loop, and that statement must not be a declaration.
```java linenums="1"
//Examples:
while(true) 
  System.out.println("Hello");  //valid case

while(true); //valid case

while(true)
  int x = 10; //invalid case

while(true) {
  int x = 10;
} //valid case
```

```java linenums="1"
//Few more examples:
//Example 1:
while(true) {
  System.out.println("Hello");
}
System.out.println("Hi"); //CE: unreachable statement


//Example 2: 
while(false) {  //CE: unreachable statement `{`
  System.out.println("Hello"); 
}
System.out.println("Hi"); 


//Example 3:
int a=10, b=20;
while(a<b) {
  System.out.println("Hello");
}
System.out.println("Hi");
//The above example will result in printing a `Hello` message on every new line until jvm not closed


//Example 4:
int a=10,b=20;
while(a>b) {
  System.out.println("Hello");
}
System.out.println("Hi");
//o/p: Hi


//Example 5:
final int a=10, b=20;
while(a<b) {
  System.out.println("Hello");
}
System.out.println("Hi"); //CE: Unreachable statement


//Example 6:
final int a=10, b=20;
while(a>b) {  //CE: Unreachable statement '{'
  System.out.println("Hello");
}
System.out.println("Hi");
```

**Note:** <br>
1. Each `final` variable is substituted with its value during compile time. <br>
2. If every argument is `final` variable (compile time constant) then expression will be evaluated at compile time.


## `do-while`
To ensure the loop body executes at least once, we should use a do-while loop.

Syntax:
```java linenums="1"
do {
  // Loop body: statements to execute
} while (condition);
```
**Explanation** <br>
1. `do { ... }` Block  <br>
    - The statements inside the do block are executed first, without checking the condition. <br>
    - This guarantees that the loop body will run at least once.<br>
2. `while (condition);` <br>
    - After executing the body, the condition is evaluated. <br>
    - If the condition is true, the loop body executes again. <br>
    - If the condition is false, the loop terminates.<br>
3. Semicolon (;) after while <br>
    - A do-while loop must end with a semicolon after the condition, unlike a regular while loop.

Curly braces are optional in a `do-while` loop. However, if omitted, only a single statement can be placed between `do` and `while`, 
and that statement must not be a declaration.

```java linenums="1"
//Example 1:
do {
  System.out.println("Hello");
} while(true);  //valid


//Example 2:
do;
while(true); // perfectly valid statement


//Example 3:
do
  int x=10; //Compile time error
while(true);


//Example 4:
do {
    int x=10;
} while(true); //valid


//Example 5:
do
while(true); //invalid
```

```java linenums="1"
//Example 6:
do while(true)
system.out.println("Hello");
while(false); //prints 'Hello' indefinitely

        
//Example 7:
do
  while(true)
    System.out.println("Hello");
while(false); //prints 'Hello' indefinitely
//Example 6 and 7 are equal, only differ in indentation


//Example 8:
do {
  System.out.println("Hello");
}while(true);
System.out.println("Hi"); // CE: Unreachable statement


//Example 9:
do{
  System.out.println("Hello");
} while(false);
System.out.println("Hi"); 
/* Output:
Hello
Hi
**/
```

```java linenums="1"
//Example 10:
int a=10,b=20;
do{
  System.out.println("Hello");
}while(a<b);
System.out.println("Hi");
// //prints 'Hello' indefinitely on new line


//Example 11:
int a=10, b=20;
do{
  System.out.println("Hello");
}while(a>b);
System.out.println("Hi");
/* Output:
Hello
Hi
**/


//Example 12:
final int a=10, b=20;
do{
  System.out.println("Hello");
} while(a<b);
System.out.println("Hi"); //CE: Unreachable statement


//Example 13:
final int a=10, b=20;
do {
  System.out.println("Hello");
} while(a>b);
System.out.println("Hi");
/* Output:
Hello
Hi
**/
```

## `for` loop
This is a most commonly used loop. If we know the number of iterations in advance, then for loop is the best choice.

Syntax:
```java linenums="1"
for (initialization; condition; update) {
  // Loop body: statements to execute
}
```

Explanation of Each Part <br>
1. Initialization <br>
  - This step gets executed only once in its lifecycle <br>
  - It is typically used to declare and initialize a loop control variable.<br>
  - Here we can declare any number of variables but should be of the same type
  - Example: `int i = 0;`<br>
  - We can use any valid java statement including `System.out.println()` in this step. <br>
2. Condition <br>
  - The loop executes as long as this condition evaluates to true. <br>
  - If the condition becomes false, the loop terminates.<br>
  - Example: `i < 5`
  - This part is optional and not specifying will result in placing true value by compiler. <br>
3. Update
  - This part executes after each iteration of the loop.
  - It is typically used to update the loop variable.
  - Example: `i++`
  - We can also specify any valid java statement. <br>

**Note:** All 3 parts of the for loop are independent of each other and optional.
Example:
```java linenums="1"
//Example 1:
for(;;) {
    System.out.println("Hello");
}

//Example 2:
for(;;);

//Both for loop will execute infinite times.
```

### Few other examples

```java linenums="1"
//Example 1:
for(int i=0; true; i++) {
    System.out.println("Hello");    
}
System.out.println("Hi"); //C.E.: Unreachable statement


//Example 2:
for(int i=0; false; i++) { //C.E.: Unreachable statement '{'
    System.out.println("Hello");
}


//Example 3:
for(int i=0; ;i++) {
    System.out.println("Hello");
}
System.out.println("Hi"); //C.E.: Unreachable statement


//Example 4:
int a=10, b=20;
for(int i=; a<b; i++) {
    System.out.println("Hello");
}
//It is going to print Hello infinite time


//Example 5:
int a=10, b=20;
for(int i=0; a>b; i++) {
    System.out.println("Hello");
}
System.out.println("Hi");
//The above for loop will be executed 0 time, and output would be 'Hi'


//Example 6:
final int a=10, b=20;
for(int i=0; a<b; i++) {
    System.out.println("Hello");
}
System.out.println("Hi"); //C.E.: Unreachable statement


//Example 7:
final int a=10, b=20;
for(int i=0; a>b; i++) {   //C.E.: Unreachable statement '{'
    System.out.println("Hello");
}
System.out.println("Hi");
```

## `for-each` loop

Also known as enhanced for loop. It was introduced in 1.5v. <br>
This is the most convenient loop to retrieve the element of Arrays and Collections.

Example:

```java linenums="1"

List<String> colors = Arrays.asList("Red","Green","Blue");

for(String color : colors) {
    System.out.println(color);
}
//Prints "Red", "Green", "Blue"
```

To print elements of two-dimensional array:

```java linenums="1"
int[][] x = {{10,20,30},{40,40}};

//Using normal loop
for (int i=0; i<x.length; i++) {
    for(int j=0; j<x[i].length; j++) {
        System.out.println(x[i][j]);
    }
}

//Using enhanced for-loop
for (int[] x1 : x) {
    for(int x2 : x1) {
        System.out.println(x2);
    }
}
```
<br>
The enhanced `for` loop (for-each loop) is the preferred choice for traversing elements of arrays and collections. 
However, its limitation is that it is applicable only to arrays and collections and cannot be used as a general-purpose loop.

```java linenums="1"
for (int i=0; i<10; i++) {
    System.out.println("Hello");
}
//We can't write an equivalent for-each loop directly
```
<br>
By using normal `for`, we can print array element either in original or in reverse order, but by using `for-each` loop, 
we can print array element only in original order, other may not possible.

```java linenums="1"
//Example:
int []numbers = {10, 20, 30};
for(int i = numbers.length-1, i>=0; i-- ) {
     System.out.println(numbers[i]);
}

//output: 
// 30
// 20
// 10
```

There is no way to write an equivalent `for-each` loop directly.

### Iterable(I)

```java linenums="1"
for (each item x : target) { 

}
```

The target element in `for-each` loop should be Arrays, Collections or Iterable object. 
An object said to be iterable if and only if corresponding class implements `java.lang.Iterable` interface.
This interface was introduced in 1.5version, and it contains only one method `iterator()`.
All array related classes already implements iterable interface.

### Difference between Iterator and Iterable

#### Iterator(I)
 - IT is related to collection
 - We can use it to retrieve elements of collection one by one.
 - Present in `java.util` package
 - It contains three methods
      1. hasNext()
      2. next()
      3. remove()

#### Iterable(I)
- It is related to `for-each` loop
- The target element in `for-each` loop should be Iterable
- Present in `java.lang` package
- It contains one method `iterator()`
