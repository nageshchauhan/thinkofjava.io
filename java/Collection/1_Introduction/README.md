[Back to Collection](../README.md)

# Collections Introduction

## Array:
An array is an indexed collection of fixed number of homogeneous data elements. 

The main advantage of arrays is we can represent multiple values by using single variable so that readability will be improved.

### Limitations of array:
1) Arrays are fixed in size ie once we create an array there is no chance of increasing or decreasing the size based on requirement. Due to this, to use arrays concept compulsory we should know size in advance which may not possible always.

2) Array can hold only homogeneous data type elements. 
Example: 

```java
Student []s = new Student[1000];
s[0] = new Student(); //valid
s[1] = new Customer(); //invalid, Compile time error incompatible types
```

We can solve this problem by using Object type array.

```java
Object []a = new Object[1000];
a[0] = new Student(); //valid
a[1] = new Customer(); //valid
```

3) Arrays concept is not implemented based on some standard data structure, hence ready made method support is not available. For every requirement we have to write the code explicitly which increases complexity of programming.

To overcome above problems of array, we should go for Collection.

1) Collections are growable in nature ie based on our requirement, we can increase or decrease the size.

2) Collections can hold both homogeneous and heterogeneous elements.

3) Every collection class is implemented based on some standard data structure, hence for every requirement ready made method support is available. Being a programmer we are responsible to use those methods and not responsible to implement those methods.


## Difference between Arrays and Collections

### Array:
1) Arrays are fixed in size ie once we create an array we cannot increase or decrease the size based on requirement. <br>

2) With respect to memory, it is not recommended to use.

3) With respect to performance, it is recommended to use.

4) It can hold only homogeneous datatype elements.

5) There is no underlying data structure for it. Hence ready made method support is not available. For every requirement we have to write the code which increase the complexity of program.

6) It can hold both primitive and objects.

### Collection:
1) It is growable in nature ie based on requirement we can increase of decrease the size. <br>

2) With respect to memory, it is recommended to use.

3) With respect to performance, it is not recommended to use.

4) It can hold both homogeneous and heterogeneous elements.

5) Every collection class is implemented based on some standard data structure. Hence for every requirement ready made method support is available. Being a programmer, we can use these methods directly and we are not responsible to implement those methods.

6) It can hold only object types but not primitives.

----------------

## Collection

If we want to represent a group of individual object as a single entity then we should go for collection.

### Collection Framework

It contains several classes and interfaces which can be used to represent a group of individual object as a single entity.

<Br>
[<-- Back to Collection](../README.md) &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; [Next: Important interface in Collection framework -->](../2_key_interface/README.md)

<br>