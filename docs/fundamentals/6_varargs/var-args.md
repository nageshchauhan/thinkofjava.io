# var arg method

## Introduction

- Also known as variable argument method.
- Until 1.4v, we can't declare a method with variable number of arguments if there is a change in the number of arguments, 
  we would have to declare a new method. It increases the length of code and reduces readability.
- To overcome this problem, the introduction of var-arg method happened in 1.5v. According to this, we can declare a method which can take variable number of arguments. 
  Such a type of methods is called var-arg methods.
- We can declare a var-arg method as follows
  ```java
  public void method1(int... x);
  ```
  We can call this method by passing any number of int values including zero numbers.
  ```java
  method1();
  method1(10);
  method1(10,20);
  method1(10,20,30);
  ```
  
- Internally var-arg parameter will be converted into a one-dimensional array, hence within var-arg method; we can differentiate values by using index.
  ```java
  class Test {
    public static void sum(int... x) {
      int total = 0;
      for(int x1 : x) {
        total += x1;
      }
      System.out.println("The sum: " + total);
    }
  
    public static void main(String[] args){
      sum();            // The sum: 0
      sum(10,20);       // The sum: 30
      sum(10,20,30);    // The sum: 60
      sum(10,20,30,40); // The sum: 100
    }    
  }  
  ```
  
## Ways to declare var-arg

### Case 1

Which of the following are valid var-arg method declaration?
```java
method1(int... x); //Valid
method1(int ...x); //Valid
method1(int...x); //Valid
method1(int x...); //Invalid
method1(int. ..x); //Invalid
method1(int .x..); //Invalid
```

### Case 2
We can mix var-arg parameter with normal parameter.

```java
method1(int x, int... y);
method1(String s, double... d);
```

### Case 3
If we mix normal parameter with var-arg parameter, then var-arg parameter should be the last parameter.
```java
method1(char ch, String... s); //valid
method1(double... d, String s); //Invalid
```

### Case 4
Inside var-arg method, we can take only one var arg parameter.

```java
method1(String s, int... x); //valid
method1(int... x, double... y); //Invalid
```

### Case 5
Inside a class, we can't declare var-arg method and corresponding one-dimensional array method simultaneously, otherwise compile time error will be raised.
```java
class Test {
  public void method1(int... x) {
    System.out.println("int...");
  }
    
  public void method1(int[] x) {
    System.out.println("int[]");
  }
}

//CE: cannot declare both method1(int...) and method1(int[]) in Test
```

### Case 6
```java
class Test {
  public static void method1(int... x) {
    System.out.println("var-arg method");  
  }
  public static void method(int x) {
    System.out.println("Normal method");  
  }

  public static void main(String[] args) {
    method1(); // var-arg method
    method1(10,20); // var-arg method
    method1(10); // Normal method
  }  
}
```
In general, the var-arg method will get the least priority, i.e., if no other method matched, then only var-arg method will get a chance. 
It is exactly the same as the default case inside switch.

## Similarity in var-arg and one-dimensional array

### Case 1
Wherever a one-dimensional array is present in class, we can replace it with var-arg parameter.
```java
public static void main(String[] args);
//the above method can be replaced with
public static void main(String... args);
```

### Case 2
Wherever var-arg parameter is present, we can't replace it with one-dimensional array.

```java
public void method1(int... x);
//above method can't be replaced with
public void method1(int[] x);
```

**Note:**
`method1(int... x)` 
We can call this method by passing a group of int values and x will become one dimensional array

`method1(int[]... x)`
We can call this method by passing a group of one-dimensional int arrays, and x will become two-dimensional int array.

```java
class Test {
  public static void main(String[] args) {
    int[] a = {10, 20};
    int[] b = {40, 50};
    method1(a,b);
  }
  public static void method1(int[]... x) {
    for(int[] x1: x) {
      System.out.println(x1[0]);  
    }
  } 
}

//Output
//10
//20
```