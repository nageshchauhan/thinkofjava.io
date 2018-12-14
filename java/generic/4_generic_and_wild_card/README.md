[Back to Generic](../README.md)

# Generic method and wild card character (?)


### 1) public void m1(ArrayList\<String\> list)
--> we can call this method by passing ArrayList of only String type. <br>
--> Within the method we can add String type objects and null to the list. If we are trying to add any other type we will get compile time error.

```java
public void m1(ArrayList<String> list){
	list.add("A");  //valid
	list.add(null); //valid
	list.add(10); // invalid, Compilation error
}
```

### 2) public void m1(ArrayList<?> list)

We can call this method by passing ArrayList of any type. But within the method we can't add any type except null, since we don't know the type exactly.

```java
public void m1(ArrayList<?> list){
	list.add(10.5); //invalid
	list.add("A"); //invalid
	list.add(null); // valid, because default value for any object is null.
}
```

This type of methods are best suitable for read-only operation.

### 3) public void m1(ArrayList<? extends X> list)

X can be either class or interface. <br>
--> If X is a class then we can call this method by passing ArrayList of either X type or its child classes. <br>
--> If X is an interface then we can call this method by passing ArrayList of either X type or its implementation class.<br>
In this case also we cannot add any type of elements to the list except null. This type of methods best suitable for read-only operation.

### 4) public void m1(ArrayList<? super X> list)

X can be either class or interface.<br>
--> If X is a class then we can call this method by passing ArrayList of either X type or its super classes. <br>
--> If X is an interface then we can call this method by passing ArrayList of either X type or super class of implementation class of X.<br>
Eg. if X is an interface i.e. Runnable then we can call this(m1) method by passing either Runnable or Object (since Thread class implements Runnable and Object is super class for Thread) <br>
--> Within the method we can add X type of objects and null to the list.

```java
ArrayList<String> l = new ArrayList<String>(); //valid

ArrayList<?> l = new ArrayList<String>(); //valid

ArrayList<?> l = new ArrayList<Integer>(); //valid

ArrayList<? extends Number> l = new ArrayList<Integer>(); //valid

ArrayList<? extends Number> l = new ArrayList<String>(); // invalid, compile error
        //incompatible type, found:ArrayList<String>  required:ArrayList<? extends Number>

ArrayList<? super String> l = new ArrayList<Object>(); // valid

ArrayList<?> l = new ArrayList<?>(); // invalid, compile error
        //unexpected type, found: ? required: class or interface without bounds

ArrayList<?> l = new ArrayList<? extends Number>(); // Invalid, compile error
        //unexpected type, found: ? extends Number  required: class or interface without bounds
```

## Type parameter declaration

We can declare type-parameter either at class level or method level. 

#### Declaring type parameter at class level

``` java
class Test<T>{
	// we can use T within class based on requirement
}
```

#### Declaring type parameter at method level
We have to declare type parameter just before return type.

```java
class Test{

	public <T> void function1(T t){
		// We can use T anywhere in this function as per need.
	}
	
	public <T> T function2(T t){
		return t;
	}
}
```

#### We can define bounded type even at method level also.

```java
public <T> void m1(); //valid

public <T extends Number> void m1(); //valid

public <T extends Runnable> void m1(); //valid

public <T extends Number & Runnable> void m1(); //valid

public <T extends Comparable & Runnable> void m1(); //valid

public <T extends Number & Comparable & Runnable> void m1(); //valid

public <T extends Runnable & Number> void m1(); // Invalid
        //because firstly class and then interface needs to be mentioned.

public <T extends Number & Thread> void m1(); // Invalid
        //because we cannot extends multiple classes
```