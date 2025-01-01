There are three types of assignment operator

### Simple assignment

```java
int x = 10;
```

### Chained assignment

```java
int a, b, c, d;
a = b = c = d = 20;
```
**Note:** We cannot perform chained assignment directly at the time of declaration.

### Compound assignment operator

Sometimes assignment operator mixed with other operators, such types of assignment operators are called compound assignment operator.

```java linenums="1"
int a = 10;
a += 20;
System.out.println(a); //30
```

The following various possible compound assignment operators in Java:

```java linenums="1"
+=
-=
*=
/=
%=
&=
!=
^=
>>=
>>>=
<<=
```

In compound assignment operators, the compiler will perform the required type casting automatically.

```java linenums="1"
byte b = 10;
b = b + 1; 
//CE: Possible loss of precision, found:int, required:byte

byte b = 10;
b++;
System.out.println(b); //11

byte b = 10;
b += 1; // ==> b = (byte)(b+1)
System.out.println(b); //11

byte b = 128;
b += 3;
System.out.println(b); //-126
```

```java linenums="1"
int a, b, c, d;
a = b = c = d = 20;
a += b -= c *= d/= 2;
System.out.println(a +"--"+ b +"--"+ c +"--"+ d);
//-160 -- -180 -- 200 -- 10

//Assignment will be performed from right to left.
```