[Back to Generic](../README.md)

# Generics classes

Until 1.4, a non-generic version of ArrayList class is declared as follows:

```java
class ArrayList{
	add(Object o);
	
	Object get(int index);
}
```

The argument to add() method is object, hence we can add any type of object to above ArrayList. Due to this we are missing type safety.
The return type of get() method is object. Hence at the time of retrieval we have to perform type-casting.<br><br>
In the 1.5 version, a generic version of ArrayList class is declared as follows:

```java
class ArrayList<T>{ // T is type parameter
	add(T t);
	
	T get(int idx)
}
```

Based on our runtime requirement, Type parameter T will be replaced with corresponding provided type.<br>
For example, to hold only String type of objects, we have to create generic version of ArrayList as follows. <br>
`ArrayList<String> l = new ArrayList<String>();`

For this requirement, the corresponding loaded version of ArrayList class is,

```java
class ArrayList<String>{
	add(String s)
	String get(int index)
}
```

add() method can take String as the argument, hence we can add only String type of objects. By mistake if we are trying to add any other type, we will get compile time error. So that through generics we are getting type-safety.
The return type of get() method is String, hence a the time of retrieval we are not required to perform type casting.

In generics we are associating a type-parameter to the class. Such type of parametrized classes are nothing but generic classes or template classes.

Based on our requirement, we can define our own generic classes as follows.

```java
class Account<T>{

}

Account<Gold> g = new Account<Gold>();
Account<Platinum> p = new Account<Platinum>();
```
Example:

```java
class GenericClass<T>{
    T obj;
    
    GenericClass(T t){
        obj = t;
    }
    
    public void show(){
        System.out.println("Parameter type is: "+obj.getClass().getName());
    }
    
    public T getObject(){
        return obj;
    }
}

public class GenericTest {

    public static void main(String[] args) {
        GenericClass<String> str = new GenericClass<String>("thinkofjava");
        str.show();
        System.out.println("value : "+str.getObject());
        
        GenericClass<Integer> integer = new GenericClass<Integer>(10);
        integer.show();
        System.out.println("value : "+integer.getObject());

    }
}
```

Output:

```
Parameter type is: java.lang.String
value : thinkofjava
Parameter type is: java.lang.Integer
value : 10
```

