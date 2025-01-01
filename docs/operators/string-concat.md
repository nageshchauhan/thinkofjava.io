# String concatenation (+)

The only overloaded operator in Java is `+` operator. Sometimes it acts as arithmetic addition and sometime String concatenation.

If at least one argument is String type, then this operator acts as concatenation otherwise arithmetic addition.

```java linenums="1"
String a = "java";
int b = 10, c = 20, d = 30;

System.out.println(a+b+c+d); //java102030
System.out.println(b+c+d+a); //60java
System.out.println(b+c+a+d); //30java30
System.out.println(b+a+c+d); //10java2030
```
Here the operators were evaluated from left to right as all having the same precedence.

Consider the following declaration, which of the following expressions are valid:

```java linenums="1"
String a = "java";
int b = 10, c = 20, d = 30;

a = b + c + d; 
//CE: incompatible types, found: int, required: java.lang.String 

a = a + b + c; //java1020

b = a + c + d; 
//CE: incompatible types: found: java.lang.String, required: int

b = b + c + d; //60
```