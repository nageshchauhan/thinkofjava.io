## `instanceof`

- `instnaceof` is an operator in Java
- We can use `instanceof` to check whether given object is of a particular type. And we know the type at the beginning.
```java linenums="1"
Thread t = new Thread();
System.out.println(t instanceof Runnable); //true
System.out.println(t instanceof Object); //true
```

## `isInstance()`

- `isInstance()` is a method present in `java.lang.class`
- We can use `isInstance()` to check whether given object is of a particular type. And we don't know the type at the beginning, and it is available dynamically at runtime.
```java linenums="1"
class Test {
  public static void main(String[] args) {
    Thread t = new Thread();
    System.out.println(Class.forName(args[0]).isInstance(t)); 
  }
}

// > java Test Runnable
// prints: true

// > java Test String
// prints: false
```

`isInstance()` is equivalent of `instanceof` operator.