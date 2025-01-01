## Conditional operator [?:]

The only available ternary operator in Java is conditional operator.

#### Syntax:

```java
Condition ? (executes when condition true) : (excutes with condition is false)
```

```java
int x = (10<20) ? 30 : 40;
System.out.println(x); //30
```

We can perform nesting of conditional operator as well.

```java
int x = (10 > 20) ? 30 : ((40 > 50) ? 60 : 70);
System.out.println(x); // 70
```