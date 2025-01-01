We can use `new` operator to create an object if we know the class name in beginning.

```java linenums="1"
Test test = new Test();

Student student = new Student();

Customer customer = new Customer();
```

`newInstance()` is a method present in class `Class`. We can use `newInstance()` to create an object if we don't know the name at beginning, and it is available at runtime.

```java linenums="1"
class Student {
}
class Customer {
    
}
class Test {
  public static void main(String[] args) {
    Object obj = Class.forName(args[0]).newInstance();  
    System.out.println("object created for "+obj.getClass().getName());
  }
}

// > java Test Student
// object created for Student

// > java Test Customer
// object created for Customer

// > java Test java.lang.String
// object created for java.lang.String
```

In the case of `new` operator, based on requirement, we can invoke any constructor.

```java
Test t1 = new Test();
Test t2 = new Test(10);
Test t3 = new Test("Java");
```

But `newInstance()`, internally calls no-argument constructor, hence to use `newInstance()`, compulsory corresponding class should contain no-argument constructor, otherwise runtime exception saying `Instantiation Exception` will be raised.

While using `new` operator, if corresponding .class file is not available during runtime, then runtime exception saying `NoClassDefFoundError` will be raised.

```java
Test t = new Test();
```
If `Test.class` file not available during runtime, then we will get runtime exception saying `NoClassDefFoundError` 

While using `newInstance()`, if corresponding .class file not present at runtime then we will get runtime exception saying `ClassNotFoundException`

```java
Object obj = Class.forName(args[0]).newInstance();

// > java Test Test123
```
If `Test123.class` file not available during runtime, then runtime exception saying `ClassNotFoundException: Test123` will be raised.

#### Difference between new and newInstance

| `new`                                                                                                         | `newInstance`                                                                                                                          |
|:--------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| - It is an operator in Java                                                                                   | - It is a method present in `java.lang.class`                                                                                          |
| - We can use `new` operator to create an object if we know class name at the beginning.                       | - We can use this method to create object if we don't know the class name at the beginning and it is available dynamically at runtime. |
| - It use `new` operator, class mandatory not required to contain no-arg constructor.                          | - To use `newInstance()`, compulsory class should contain no-arg constructor otherwise runtime exception will be thrown.               |
| - If `.class` file not available during runtime then runtime exception `NoClassDefFoundError` will be raised. | - If `.class`  file not available during runtime then runtime exception `ClassNotFoundException` will be raised.                       |
