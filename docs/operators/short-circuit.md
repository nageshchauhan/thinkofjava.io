## Short-circuit operators (&&, ||)

- These are exactly the same as bitwise operators (&, |) except the following difference

|                     &, \|                     |                &&, \|\|                |
|:---------------------------------------------:|:--------------------------------------:|
|  -Both arguments should always be evaluated   | - 2nd argument evaluation is optional. | 
|          -Relatively low performance          |      -Relatively high performance      |
| -Applicable for both boolean & integral types |   -Applicable only for boolean type.   |

**Note:** x && y --> y will be evaluated iff x is true, i.e., if x is false, then y won't be evaluated. x||y --> y will be evaluated iff x is false, i.e., if x is true then y won't be evaluated.

```java linenums="1"
int x = 10, y = 15;

if( ++x<10 & ++y>15) {
  x++;  
} else {
    y++
}
System.out.println(x + "---" + y);
```

The following output will be returned if we replace operator

|      | x    | y    |
|:-----|:-----|:-----|
| &    | 11   | 17   |
| &&   | 11   | 16   |
| \|   | 12   | 16   |
| \|\| | 12   | 16   |

```java linenums="1"
int x = 10;
if(++x<10 && (x/0>10)) {
    System.out.println("Hello");
} else {
    System.out.println("Hi");
}

// Output: Hi
```

**Note:** If we replace && with & then runtime exception will be raised with message `ArithmeticException: / by zero`