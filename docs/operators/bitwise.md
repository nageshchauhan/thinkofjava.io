## Bitwise operators (&, |, ^)

`&` --> AND --> Returns true iff both arguments are true <br>
`|` --> OR --> Returns true iff one argument is true <br>
`^` --> XOR --> Returns true iff both arguments are different.

```java
System.out.println(true & false); //false
System.out.println(true | false); //true
System.out.println(true ^ false); //true
```

- We can apply these operators for integral type as well.
  ```java
  System.out.println(4 & 5); //4
  //Explanation: 4=100, 5=101, so (100 & 101) = 100
  
  System.out.println(4 | 5); //5
  //Explanation: 4=100, 5=101, so (100 | 101) = 101
  
  System.out.println(4 ^ 5); //1
  //Explanation: 4=100, 5=101, so (100 ^ 101) = 001
  ```

## Bitwise complement operator (~ tilde)

- We can apply this operator for integral types but not for boolean types, if we try to do so, a compile time error will be raised.
  ```java
  System.out.println(~true); //CE: operator ~ cannot be applied to boolean.
  ```
  ```java
  System.out.println(~4); //-5
  //Explanation at: https://www.geeksforgeeks.org/bitwise-complement-operator-tilde/
  ```
  
**Note:** <br>
- The most significant bit represents sign bit, 0 means positive, and 1 is negative.<br>
- Positive number will be represented directly in memory, whereas negative number will be represented indirectly in memory, in 2's complement form

## Boolean complement operator (!)

We can apply this operator only for boolean type.

```java
System.out.println(!false); //true

System.out.println(!4); //CE: operator ! cannot be applied to int
```