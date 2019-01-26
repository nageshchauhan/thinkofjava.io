[Back to Generic](../README.md)

# Introduction to Generics

The main objective of generics are to provide type-safety and to resolve type-casting problem.

### 1) Type-safety:
Arrays are type-safe i.e. we can give guarantee for the type of elements present inside array. <br>
For eg. If our programming requirement is to hold only String type of objects, we can choose String array. By mistake if we are trying to add any other type of objects, we will get compile time error.

```java
String [] s = new String[100];
s[0] = "ABC"; //valid
s[1] = "DEF"; //valid
s[2] = new Integer(30);// Compile time error incompatible type
```

Hence String array can contain only string type of objects. Due to this, we can give the guarantee for the type of elements present inside array. Hence arrays are safe to use with respect to type i.e. arrays are type safe. But collections are not type-safe i.e. we can't give guarantee for the type of elements present inside collection.
For e.g. If our programming requirement is to hold only String type of objects and if we choose ArrayList, by mistake if we are trying to add any other type of object, we won't get any compile time error but the program may fail at runtime.

```java
ArrayList l = new ArrayList();
l.add("ABC");
l.add("xyz");
l.add(new Integer(10));


String name1 = (String) l.get(0);
String name2 = (String) l.get(1);
String name3 = (String) l.get(2);// RuntimeException: ClassCastException
```

Hence, we can't give the guarantee for the type of elements present inside collection. Due to this collections are not safe to use with respect to type i.e. Collections are not type-safe.


### 2) Type-casting:

In the case of Arrays, at the time of retrieval, not required to perform type-casting because there is a guarantee for the type of elements present inside array.

```java
String[] s = new String[10];
s[0] = "ABC";

String name1 = s[0];// here type-casting not required.
```

In the case of collections, at the time of retrieval compulsory we should perform type casting because there is no guarantee for the type of elements present inside collection.

``` java
ArrayList l = new ArrayList();
l.add("ABC");

String name1 = l.get(0);//Compile time error: Incompatible types found.
String name2 = (String) l.get(0); // Type casting is mandatory
```

Hence type casting is a bigger headache in collections.

To overcome above problems of collections, java introduced Generics concept in 1.5 version. Hence the main objective of generics are <br>
i. To provide type safety <br>
ii. To resolve type casting problem



To hold only String type of objects, we can create generic version of ArrayList object as follows:

```java
ArrayList<String> l = new ArrayList<String>();

l.add("ABC");
```

for this ArrayList, we can add only String type of object. By mistake if we are trying to add any other type, then we will get compile time error. Hence through generics we are getting type safety.

At the time of retrieval it is not required to perform any type casting.

```java
String name = l.get(0); // type-casting is not required
```
Hence through generics we can solve type casting problem.

#### Case: 1)

Polymorphism(usage of parent reference to hold child object) concept applicable for base type but not for parameter type.

Eg:

```java
ArrayList<String> l = new ArrayList<String>(); //will work
List<String> l = new ArrayList<String>();//here (List is base type) 
                //and (String is parameter type) so it will work
Collection<String> l = new ArrayList<String>(); //will work
ArrayList<Object> l = new ArrayList<String>(); // Compile time error: incompatible types 
                //found ArrayList<String> required ArrayList<Object>
```

#### Case: 2)
For the parameter type we can use any class or interface name and we can't use primitive type. Violation leads to compile time error.

Eg:

```java
ArrayList<int> l = new ArrayList<int>(); // Compile time error: unexpected type 
                    //found: int, required: reference
```


<br> 

<div style="float:left;">
<a href="../README.md"><-- Back to Generic</a>
</div>



<div style="float:right">
  <a href="../2_generic_classes/README.md" style="">Next: Generic classes --></a>
</div>

<br>