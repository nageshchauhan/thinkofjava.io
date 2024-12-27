# Command line arguments

## Introduction

The arguments which are passed from command prompt/Terminal are called command line arguments.
With the command line arguments, JVM will create an array and pass that array as argument while calling the main method.
```cmd
java Test A B C

A: argument one with index 0
B: argument two with index 1
C: argument three with index 2
```

The main goal of command line arguments is, we can customize the behavior of the main method.<br>

Let's understand the command line with a few examples:
### Example 1

```java linenums="1"
class Test {
  public static void main(String[] args) {
    for (int i = 0; i <= args.length; i++) {
        System.out.println(args[i]);
    }
  }  
}

//Executing the above code with the following input
java Test A B C

//Output:
A
B
C
ArrayIndexOutOfBoundException

//Even executing with the following command will return the same error
java Test

//Output:
ArrayIndexOutOfBoundException
```

### Example 2
```java linenums="1"
class Test {
  public static void main(String[] args) {
    String[] argh = {"x", "y", "z"};
    args = argh;
    for (String s : args) {
      System.out.println(s);  
    }
  }  
}

java Test A B C
//Output
x
y
z

java Test
//Output
x
y
z
```

### Example 3
within the main method, command line arguments are available in String form.
```java linenums="1"
class Test {
  public static void main(String[] args) {
    System.out.println(args[0]+args[1]);      
  }
}

java Test 10 20
//Output:
1020
```

### Example 4
Usually, space itself is the separator between command line arguments. If our argument contains space, then we need to enclose it within double quote.

```java linenums="1"
class Test {
  public static void main(String[] args) {
    System.out.println(args[0]);      
  }
}

java Test "Note  Book"
//Output:
Note Book
```

## Java coding standards
- Whenever we are writing Java code, it is highly recommended to follow coding standards. Whenever we are writing any component, 
  its name should reflect the purpose of that component.
  The main advantage of this approach is enhanced readability and maintainability.
  ```java linenums="1"
  class A {
    public int m1(int x, int y) {
      return x + y;
    }
  }
  ```
  The above code can be written better as follows:
  ```java linenums="1"
  public class Calculator {
    public static int add(int num1, int num2) {
      return num1 + num2;
    }
  } 
  ```

- Standards for classes
    - Generally class names are nouns.
    - It should start with uppercase character, and if it contains multiple words, each inner word should start with uppercase character.
    ```java linenums="1"
    String
    StringBuffer
    Account
    Dog
    ```
- Standards for Interfaces
    - Generally interface names are objective
    - It should start with upper case character and if it contains multiple words, each inner word should start with uppercase character
    ```java linenums="1"
    Runnable
    Comparable
    Serializable
    ```

- Standards for methods
    - Generally, method names are either verbs or verb-noun combination.
    - It should follow camelCase.
    ```java linenums="1"
    print()
    eat()
    sleep()
    start()
    ```

- Standards for variable
    - Generally variable names are noun.
    - It follows camelCase
    ```java linenums="1"
    name
    age
    salary
    mobileNumber
    ```
  
- Standards for constants
    - Generally constant names are nouns.
    - It should contain only uppercase character, and if it contains multiple words, then these words are separated with underscore.
    - We can declare constant with `public static final` modifier
    ```java linenums="1"
    MAX_VALUE
    MAX_PRIORITY
    PI
    ```