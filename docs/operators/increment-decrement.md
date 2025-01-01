# Increment & Decrement operators

## Introduction

### Increment

#### Pre-increment
```java linenums="1"
int y = 10;
int x = ++y;
System.out.println(x); //11
```
#### Post-increment
```java linenums="1"
int y = 10;
int x = y++;
System.out.println(x); //10
```
### Decrement

#### Pre-decrement
```java linenums="1"
int y = 10;
int x = --y;
System.out.println(x); //9
```
#### Post-decrement
```java linenums="1"
int y = 10;
int x = y--;
System.out.println(x); //10
```

## Various cases
- We can apply increment and decrement operators only to the variables but not to the constant values, otherwise compile time error will be raised.
```java linenums="1"
int x = 10;
int y = ++x;
System.out.println(y); //11


int x = 10;
int y = ++10; // CE: unsupported type, found: value, required: variable
System.out.println(y);
```
<br>

- Nesting of increment and decrement operators is not allowed.
```java linenums="1"
int x = 10;
int y = ++(++x); //CE: unsupported type, found: value, required: variable
System.out.println(y);
```
<br>

- We can't use increment or decrement operators on the final variable.
```java linenums="1"
final int x = 10;
x++;  // CE: cannot assign a value to final variable x
System.out.println(x);
```
<br>

- Increment and decrement operator can be applied to every primitive type except boolean;
```java linenums="1"
int x = 10;
x++;
System.out.println(x); //11

char ch = 'a';
ch++;
System.out.println(ch); //b

double d = 10.5;
d++;
System.out.println(d); //11.5

boolean b = true;
b++; // CE:operator ++ cannot be applied to boolean
System.out.println(b);
```

## Difference between b++ and b=b+1

If we apply any arithmetic operator between two variables a and b, the result type is always `max(int, type of a, type of b)`
```java linenums="1"
byte a = 10;
byte b = 20;
byte c = a + b; //CE: possible loss of precision, found: int, required: byte
System.out.println(c);
```

```java linenums="1"
byte b = 10;
b = b + 1;  //CE: possible loss of precision, found:int, required: byte
System.out.println(b);
```
<br>
In the case of increment and decrement operator, internal type casting will be performed.
`b++ =>  b=(type of b)(b+1)`

```java linenums="1"
byte b = 10;
b++;
System.out.println(b); //11
```