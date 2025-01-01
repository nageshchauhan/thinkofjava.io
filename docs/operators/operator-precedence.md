## Operator precedence

1. Unary operators
```java
[], x++, x--
++x, --x, ~, !
new, <type> (used for type casting)
```
2. Arithmetic operators
```java
*, /, %
+, -
```
3. Shift operators
```java
>>>, >>, <<
```
4. Comparison operators
```java
<, <=, \>, \>=, instanceof
```
5. Equality operators
```java
==, !=
```

6. Bitwise operators
```java
&
^
|
```

7. Short-circuit operators
```java
&&
||
```

8. Conditional operators
```java
?:
```

9. Assignment operators
```java
=, +=, -=, *=, ....
```

## Evaluation order of Java operands

There is no precedence for operands; before applying any operator, al operands will be evaluated from left to right.

```java linenums="1"
public class EvaluationOrderDemo {
  public static void main(String[] args) {
    System.out.println(m1(1)+m1(2)*m1(3)/m1(4)+m1(5)*m1(6));
  } 
  
  public static int m1(int i) {
      System.out.println(i);
      return i;
  }
}

//Output
1
2
3
4
5
6
32
```