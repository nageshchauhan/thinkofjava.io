[Back to Generic](../README.md)

## Communication with non-generic code

If we send generic object to non-generic area then it start behaving like non-generic object and vice-versa. The location in which object is present based on that behaviour will be defined.

Example:

```java
import java.util.ArrayList;
import java.util.List;

public class NonGenericCall {

    public static void main(String[] args) {
        //declaring generic list of type String
        List<String> list = new ArrayList<String>();
        list.add("ABC");
        list.add("DEF");
        list.add("XYZ");
        //list.add(10); //compile time error
        
        method(list);
        
        System.out.println(list); // [ABC, DEF, XYZ,10, 10.5, false]
        
        //list.add(10); //compile time error
    }
    
    public static void method(List list){
        list.add(10);
        list.add(10.5);
        list.add(false);
    }
}
```

The main purpose of generics is to provide type-safety and to resolve type-casting problems. Type safety and type casting both are applicable at compile time, hence generics concept also applicable only at compile time but not at runtime. <br><br>
At the time of compilation, as last step generic syntax will be removed and hence for the JVM generic syntax won't be available. Hence the following declarations are equal

```java
ArrayList l = new ArrayList<String>();
ArrayList l = new ArrayList<Integer>();
ArrayList l = new ArrayList<Double>();
ArrayList l = new ArrayList();
```

Example:

``` java
ArrayList l = new ArrayList<String>();
l.add(10);
l.add(10.5);
l.add(true);
System.out.println(l) // [10, 10.5, true]
```

The following declarations are equal

``` java
ArrayList<String> l1 = new ArrayList<String>();
ArrayList<String> l2 = new ArrayList();
```

for these ArrayList objects we can add only String type of objects.

```java
class Test{
	public static void method1(ArrayList<String> l){  
	   //compilation error: Both methods have same erasure 
       //erasure (method signature after removing generics called erasure)
		
	}
	
	public static void method1(ArrayList<Integer> l){ 
	   //compilation error: Both methods have same erasure 
		
	}
}
```

In the above example, at the compile time following activity happened <br>
--> compile code normally by considering generic syntax. <br>
--> Remove generic syntax <br>
--> compile once again resultant code <br>
