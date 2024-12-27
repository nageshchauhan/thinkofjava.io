# main method

## Introduction
- Whether the class contains the main method or not and whether the main method declared according to requirement or not, 
  the compiler won't check these things. At runtime, JVM is responsible to check these things.
  If JVM unable to find the main method then RuntimeException with message `NoSuchMethodError: main` will be thrown.
  ```java
  class Test {
  }
  
  // --> java Test
  //     RE: NoSuchMethodError: main
  ```
  
- At runtime, JVM always searches for the main method with the following prototype:
  ```java
  public static void main(String[] args);
  
  // public: To call by JVM from anywhere
  // static: without existing object, JVM has to call this method
  // void: the main method won't return anything to JVM
  // main: This is the name configured inside JVM
  // String[]: to accept command line arguments if any
  ```
  
- The above syntax is very strict, and if we perform any change then we will get runtime exception with message `NoSuchMethodError: main`
- Even though the above syntax is very strict, the following changes are acceptable:
    - Instead of `public static`, we can also use `static public` i.e., the order of modifier is not important.
    - We can declare the String array in any acceptable form:
        - main(String[] args)
        - main(String []args)
        - main(String args[])
    - Instead of args param name, we can use any valid java identifier.
        - main(String[] xyz)
    - We can replace the String array with String var-arg parameter.
- We can declare the main method with the following modifiers:
    - final
    - synchronized
    - strictfp
  ```java linenums="1"
  class Test {
    static final synchronized strictfp 
    public void main(String[] args) {
      System.out.println("Valid main method");
    }
  }
  ```
  
## Question & Answer

Which of the following main method declarations are valid?

```java linenums="1"
public static void main(String args);   
//Invalid: missing String[] argument

public static void Main(String[] args); 
//Invalid: Main and not main

public void main(String[] args);        
//Invalid: missing static modifier

final synchronized strictfp public void main(String[] args);
//Invalid: missing static modifier

final synchronized strictfp public static void main(String[] args);
//valid

public static void main(String... args); 
//valid
```
**Question:** In which of the above case we will get compile time error?<br>
**Answer:** We won't get compile time error in any of the cases but except the last two cases, we will get runtime exception 

Overloading of the main method is possible, but JVM will always call String[] argument main method. 
The other overloaded method we have to call explicitly like normal method call.
```java linenums="1"
class Test {
  public static void main(String[] args) {
    System.out.println("String[]");    
  }  
  public static void main(int[] args) {
    System.out.println("int[]");  
  }
}

//Output: String[]
```
<br><br>
Inheritance concept is applicable for the main method, hence while executing child class if a child doesn't contain the main method, 
then parent class main method will be executed.
```java linenums="1"
public class Parent {
  public static void main(String[] args) {
    System.out.println("Parent main");      
  }
}
class Child extends Parent {
    
}

// compiling Parent class will result two class file 
// Parent.class and Child.class

// Executing Parent class will result following output
// Parent main

// Executing Child class will also result same output
// Parent main
```

```java linenums="1"
public class Parent {
  public static void main(String[] args) {
    System.out.println("Parent main");      
  }
}
class Child extends Parent {
  public static void main(String[] args) {
    System.out.println("Child main");      
  }
}

// Here the main method declared in child class called
// method hiding but not method overriding
```

**Note:** For the main method, inheritance and overloading concepts are applicable but not overriding. Instead of method overriding, it is method hiding.

### 1.7v enhancement wrt main()
- Until 1.6v, if class doesn't contain the main method, then the runtime exception with message `NoSuchMethodError: main` was thrown.
  But from 1.7v onwards, we will get more elaborated error information
  `Error: main method not found in class <ClassName>, please defin main method as public static void main(String[] args)`
- The main method is mandatory in 1.7v to start program execution, hence even though class contains static block, it won't be executed if class does not contain the main method.
- Execution of program in 1.7v
  ```mermaid
  graph TD
  A[Start] --> B{"Check for <br>main()"};
  B --> |"Available"| D["Identification of <br>static member"]
  B --> |"Not available"| C["Error: main method not found in class"]
  D --> E["Execution of static variable assignments & static block"]
  E --> F["Execute main() method"]
  ```
  
**Question:** Without writing main(), is it possible to print some statement to console?<br>
**Answer:** Yes, by using static block, but this rule was applicable until 1.6v. From 1.7v, it is impossible to print some statement to console without writing the main method.