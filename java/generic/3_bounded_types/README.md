[Back to Generic](../README.md)

# Bounded types

We can bound the type parameter to a particular range by using extends keyword, such types are called bounded types. <br>
Eg.1. `class Test<T> {  }`

As the type parameter we can pass any type and there is no restriction hence it is unbounded type.

```java
Test<Integer> integer = new Test<Integer>(); //valid
Test<String> str = new Test<String>(); //valid
```
### Syntax for bounded type:
```java
class Test<T extends X> {
}
```

X can be either class or interface. If X is a class then as the type parameter, we can pass either X type or its child classes.<br>
If X is an interface then as the type parameter we can pass either X type or its implementation classes.

```java
class Test<T extends Number>{

}

Test<Integer> t1 = new Test<Integer>(); //valid
Test<String> t2 = new Test<String>(); // invalid, Compile time error
                // type parameter java.lang.String is not within its bound


class Test<T extends Runnable>{

}

Test<Thread> t1 = new Test<Thread>();//valid
Test<Runnable> t2 = new Test<Runnable>(); // valid
Test<Integer> t3 = new Test<Integer>(); //invalid, compile time error
                //type parameter java.lang.Integer is not within its bound
```


We can define bounded types even in combination also <br>

```java
class Test<T extends Number & Runnable>{
}
```

As the type parameter we can take anything which should be child class of Number and should implements Runnable interface.

```java
class Test<T extends Runnable & Comparable>{ 
    //valid
}

class Test<T extends Number & Runnable & Comparable>{ 
    //valid
}

class Test<T extends Runnable & Number>{ 
    // Invalid, because we have to take class first followed by interface next
}

class Test<T extends Number & Thread>{ 
    //Invalid, because we can't extends more than one class simultaneously.
}
```

### Note:
1) We can define bounded types only by using `extends` keyword, and we cannot use `implements` and `super` keywords but we can replace purpose of `implements` keyword using `extends` keyword.

```java
class Test<T extends Number> { } //valid.

class Test<T implements Runnable>{ } // invalid

class Test<T extends Runnable>{ } //valid

class Test<T super String>{ } // invalid
```

2) As the type parameter `T`, we can take any valid java identifier but it is convention to use `T`.

```java
class Test<T>{ } //valid

class Test<X>{ } //valid

class Test<A>{ } //valid

class Test<ThinkOfJava>{ } //valid
```

3) Based on our requirement, we can declare any number of type parameters and all these type parameters should be separated with comma.

```java
class Test<A, B>{ }

class Test<X, Y, Z> { }

class HashMap<K, V> { }
```

<br>

<div style="float:left">
  <a href="../2_generic_classes/README.md" style=""><-- Generic classes</a>
</div>


<div style="float:right">
  <a href="../4_generic_and_wild_card/README.md" style="">Next: Generic methods and wild card character (?) --></a>
</div>

<br>