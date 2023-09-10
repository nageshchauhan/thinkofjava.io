# Initialize and static block

## Initialize Block
- It contains the code that is always executed whenever an instance is created.
- It is used to declare/initialize the common part of various contructors of class.

E.g.

```java
public class InitializerBlock{
    {
        System.out.println("Initialize block");
    }
    
    public InitializerBlock(){
        System.out.println("Constructor without param");
    }
    
    public InitializerBlock(int a){
        System.out.println("Constructor with param");
    }
    
    public static void main(String []args){
        InitializerBlock s1 = new InitializerBlock();
        InitializerBlock s2 = new InitializerBlock(10);
    }
}
```

Output:

```java
Initalize block
Constructor without param
Initalize block
Constructor with param
```

<strong>Note:</strong> Contents of initializer block are executed whenever any contructor is invoked (before the constructor content).

### Multiple initializer block

- We can have multiple intializer block in a single class.
- If compiler finds multiple initializer block then they all are executed from top to bottom.


```java
public class InitializerBlock(
    {
        System.out.println("initialize block 1");
    }
    {
        System.out.println("initialize block 2");
    }
    public InitializerBlock(){
        System.out.println("constructor called");
    }
    {
        System.out.println("initialize block 4");
    }
    
    public static void main(String []args){
        InitializerBlock obj = new InitializerBlock();
    }
}
```

Output:

```java
initialize block 1
initialize block 2
initialize block 4
constructor called
```


### Initializer block with parent class

```java
class Parent{
    {
        System.out.println("Apple");
    }
    public Parent(){
        System.out.println("Parent constructor");
    }
}
public class Child extends Parent{
    {
        System.out.println("Yellow");
    }
    public Child(){
        System.out.println("Child constructor");
    }
    
    public static void main(String []args){
        Child c = new Child();
    }
}
```

Output:

```java
Apple
Parent constructor
Yellow
Child constructor
```

<hr>

## Static Block
The static blocks and variables gets called once, when the class itself is initialized, no matter how many instance of that type you create.

```java
public class StaticBlock{
    static{
        System.out.println("static block");
    }
    
    public StaticBlock(){
        System.out.println("constructor called");
    }
    
    public static void main(String []args){
        StaticBlock obj1 = new StaticBlock();
        StaticBlock obj2 = new StaticBlock();
    }
}
```

Output:

```java
static block
constructor called
constructor called
```

<strong>Note:</strong> static blocks are executed before constructor.


Following program will demonstrate the order of execution for static and initializer block and variables.

```java
class Parent(){
    static { step(1); };
    public static int step1 = step(2);
    publc int step6 = step(6);
    
    public Parent(){
        step(8);
    }
    { step(7); }
    
    public static int step(int step){
        System.out.println("step : "+step);
        return step;
    }
}
public class Child extends Parent{
    { step(9); }
    public static int step3 = step(3);
    public int step10 = step(10);
    
    static{ step(4); }
    
    public Child(){
        step(11);
    }
    
    public static void main(String []args){
        step(5);
        new Child();
        step(12);
    }
}
```

output:

```java
step : 1
step : 2
step : 3
step : 4
step : 5
step : 6
step : 7
step : 8
step : 9
step : 10
step : 11
step : 12
```

- Load all the static blocks and static variables of parent class in the order they are declared.
- Load all the static blocks and static variables of child class in the order they are declared.
- load all the initializer block and instance variable of parent class in the order they are declared and the of the child class.