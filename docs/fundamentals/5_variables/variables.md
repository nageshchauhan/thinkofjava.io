# Types of variables

## Division based on type

Based on types of value represented by a variable, all variables are divided into two types.

- ### Primitive variable

    It can be used to represent primitive values.
    
    e.g. `int x = 10;`

- ### Reference variables

    It can be used to refer to an object.
    
    e.g. `Student s = new Student();`

## Division based on position

Based on the position of declaration and behavior, all variables are divided into three types.

### Instance variable
- If the value of a variable varied from object to object, such a type of variables is called instance variables.
- For every object, a separate copy of instance variable will be created.
- It should be declared within the class directly but outside any method/block/constructor.
- It will be created at the time of object creation and destroyed at the object destruction, hence the scope of instance variable is exactly the same as the scope of object.
- It will be stored in heap memory as part of an object.
- We can't access instance variable directly from static area but can be accessed by using object reference.
- We can access instance variable directly from the instance area
  ```java linenums="1"
  class Test {
    int x = 10;
    public static void main(String[] args) {
      System.out.println(x);
      // CE: Non-static referenced from a static context
  
      Test t1 = new Test();
      System.out.println(t1.x); //prints 10
    }
    
    public void m1() {
      System.out.println(x); //valid and prints 10;
    }
  }
  ```
  
- JVM will always provide default values, and we are not required to perform initialization explicitly.
  ```java linenums="1"
  class Test {

    int x; 
    double d; 
    boolean b; 
    String s;

    public static void main(String[] args) {
      Test t = new Test();
      System.out.println("Integer value: "+t.x); //Integer value: 0
      System.out.println("double value: "+t.d); //double value: 0.0
      System.out.println("boolean value: "+t.b); //boolean value: false
      System.out.println("String value: "+t.s); //String value: false
    }
  
  }
  ```
  
### Static variable
- If the value of a variable is not varying from object to object, then it is not recommended to declare as instance variable. 
  We should declare such a type of variable at class level by using static modifier.
- In case of instance variable, for every object a separate copy will be created, but in case of static variable, a single copy will be created at class level and shared by every object of class.
- It should be declared within the class directly but outside any method/block/constructor.
- It will be created at the time of class loading and destroyed at the time of class unloading, hence the scope of static variable is exactly the same as the scope of .class file.

  Execution of Java program:

  - java Test (hit Enter)
      - Start JVM
      - Create and start the main thread
      - Locate Test.clas file
      - Load Test.class --> static variable creation
      - Execute main()
      - Unload Test.clas --> static variable destruction
      - Terminate the main thread
      - Shutdown JVM

- It will be stored in the method area
- We can access static variables either by object reference or by class name. Within the same class, it is not required to use class and we can access directly.
  ```java linenums="1"
  class Test {
    
    static int x = 10;
    
    public static void main(String[] args) {
      Test t = new Test();
      System.out.println("Access static variable using " +
       "object reference: " + t.x); 
      //Access static variable using object reference: 10
  
       System.out.println("Access static variable using " +
        "class name: " + Test.x);
       //Access static variable using clas name: 10
  
       System.out.println("Access static variable directly: " + x);
       //Access static variable directly: 10
    }
    
    public void m1() {
      System.out.println("Access static variable " +
       "from instance area: " + x);
      //Access static variable from instance area: 10
    }
  }
  ```

- We can access static variables directly from instance and static area.
- JMV will provide default value for static variables, and we are not required to perform initialization explicitly.
  ```java linenums="1"
  class Test {
  
    static int x;
    static double d;
    static String s;
    
    public static void main(String[] args) {
      System.out.println("Default value of integer x: " + x);
      //Default value of integer x: 0
      System.out.println("Default value of double d: " + d);
      //Default value of double d: 0.0
      System.out.println("Default value of String s: " + s); 
      //Default value of String s: null
    }
  }
  ```

- Static variables are also known as class level variables or fields.
  ```java linenums="1"
  class Test {
  
    static int x = 10;
    int y = 20;
  
    public static void main(String[] args){
      Test t1 = new Test();
      t1.x = 30;
      t1.y = 40;
      System.out.println(t1.x + "---" + t1.y);
      // 30 --- 40
      
      Test t2 = new Test();
      System.out.println(t2.x + "---" + t2.y);
      // 30 --- 20
    }
  }
  ```
  
### Local variable
- Sometime to meet a temporary need of programmer, we can declare variables inside a method, block or constructor. Such a type of variables is called local/temporary/stack/automatic variable.
- It will be stored inside stack memory.
- It will be created while executing the block in which it is declared.
- Once block execution completes, automatically local variable will be destroyed; hence the scope of local variable is the block in which it is declared.
  ```java linenums="1"
  class Test {
    
    public static void main(String[] args){
      int i = 0;
      for(int j = 0; j < 3; j++) {
        i = i + j;   
      }
      System.out.println(i + "---" + j);
      //CE: cannot find symbol
      // symbol: variable j
      // location: class Test
    }
  }
  ```
  
- JVM won't provide default value for local variables, we should perform initialization before using that variable. If we are not using then, it is not required to perform initialization.
  ```java linenums="1"
  class Test {
    public static void main(String[] args){
      int x;
      System.out.println("Hello"); //Prints Hello
    }
  }
  ```
  ```java linenums="1"
  class Test {
    public static void main(String[] args){
      int x;
      System.out.println(x);
      //CE: variable x might not have been initialized.
    }
  }
  ```
  ```java linenums="1"
  class Test {
    public static void main(String[] args){
      int x;
      if(args.length > 0) {
        x = 10;  
      }
      System.out.println(x);
      //CE: variable x might not have been initialized.
    }
  }
  ```
  ```java linenums="1"
  class Test {
    public static void main(String[] args){
      int x;
      if(args.length > 0) {
        x = 10;
      } else {
        x = 20;  
      }
      System.out.println(x);
    }
  }
  
  java Test A --> 10
  java Test --> 20
  ```
  
**Note:**

- It is not recommended to perform initialization for local variable inside logical block, because there is no guarantee for the execution of these blocks always at runtime.
- It is highly recommended to perform initialization for local variables at the time of declaration at least with default value.
- The only applicable modifier for local variable is final. If we try to apply any other modifier, then compiler time error will be raised.
  ```java linenums="1"
  class Test {
    public static void main(String[] args){
      public int x = 10; //illegal start of expression
      private int y = 20; //illegal start of expression
      protected int z = 30; //illegal start of expression
      static int a = 40; //illegal start of expression
      transient int b = 50; //illegal start of expression
      volatile int c = 60; //illegal start of expression
      final int d = 70; //valid
    }
  }
  ```

- If we are not declaring any modifier, then default access modifier is default, but this rule is applicable only for instance and static variable but not for local variable.

## Summary

- For instance and static variable, JVM will provide default values, and we are not required to perform initialization explicitly, 
  but for local variables JVM won't provide default values, compulsory we should perform initialization before using that variable.
- Multiple threads can access instance and static variables simultaneously. Hence, these are not thread safe but in the case of local variables, 
  for every thread a separate copy will be created, so local variables are thread safe.
  
  | Type of variable   | Is thread-safe   |
  |:-------------------|:-----------------|
  | Instance variable  | No               |
  | static variable    | No               |
  | local variable     | Yes              |

- Every variable in Java should be either instance, static or local.
- Every variable in Java should be either primitive or reference.
  Hence, various possible combinations of variables in Java are:
  ```mermaid
  flowchart LR
  Instance --> Primitive
  Instance --> Reference
  Static --> Primitive
  Static --> Reference
  Local --> Primitive
  Local --> Reference
  ```
  ```java linenums="1"
  class Test {
    int x = 10; // instance primitive variable
    static String s = "Java"; // static reference variable
    public static void main(String[] args){
      int[] y = new int[2]; //local reference variable
    }
  }
  ```
  
- Uninitialized array
  ```java linenums="1"
  class Test {
    int [] x;
    public static void main(String[] args){
      Test t = new Test();
      System.out.println(t.x); // null
      System.out.println(t.x[0]); //RE: NullPointerException
    }
  }
  ```

- local level
  ```java linenums="1"
  int[] x;
  System.out.println(x); 
  //CE: variable x might not have been initialized
  System.out.println(x[0]); 
  //CE: variable x might not have been initialized
  ```
  ```java linenums="1"
  int[] x = new int[2];
  System.out.println(x); // [I@253665
  System.out.println(x[0]); //0
  ```
  Once we create an array, every array element by default is initialized with default values, irrespective of whether it is instance, static or local array.