[Back to Collection](../README.md)

# Collections utility classes

Collections class defined several utility methods for collection object like sorting, searching, reversing etc.

## Sorting elements of List
Collection class defines following methods for sorting

1. `public static void sort(List<E> l)`
To sort based on default natural sorting order. In this case list should compulsory contain homogeneous and comparable objects otherwise will get ClassCastExcecption at runtime.
List should not contain null otherwise we will get NullPointerException at runtime.

2. `public static void sort(List<E> l, Comparator<E> c)`
To sort based on customized sorting order.

#### Example: 1

```java
import java.util.ArrayList;
import java.util.Collections;
public class SortExample {
    
    public static void main(String[] args) {
		ArrayList list = new ArrayList();
        
        list.add("A");
        list.add("C");
        list.add("X");
        list.add("M");
        
        //list.add(10); // will throw ClassCastException on runtime
        //list.add(null); // will throw NullPointerException while comparing elements
        
        System.out.println("before sorting: "+list);
        Collections.sort(list);
        System.out.println("after sorting: "+list);
    }
}
```

Output:

```java
before sorting: [A, C, X, M]
after sorting: [A, C, M, X]
```

#### Example: 2

```java
import java.util.ArrayList;
import java.util.Collections;
public class SortExample {
    
    public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<String>();
        
        list.add("A");
        list.add("C");
        list.add("X");
        list.add("M");
      
        System.out.println("before sorting: "+list);
        Collections.sort(list,new MyComparator());
        System.out.println("after sorting: "+list);
    }
}
class MyComparator implements Comparator<String>{

    @Override
    public int compare(String o1, String o2) {
        return o2.compareTo(o1);
    }
}
```

Output:

```java
before sorting: [A, C, X, M]
after sorting: [X, M, C, A]
```
## Searching element in List

Collections clas defines following binary search methods:

1. `public static int binarySearch(List<E> l, E target)`
If the list is sorted according to default natural sorting order then we have to use this method.

2. `public static int binarySearch(List<E> l, E target, Comparator<E> c)`
We have to use this method if the list is sorted according to customized sorting order.

Scenarios:
--> The above search method internally uses binary search algorithm. <br>
--> Successful search returns index(positive value). <br>
--> Unsuccessful search returns insertion point (negative value). Note: insertion point start from -1. <br>
--> Insertion point is the location where we can place target element in sorted list.
--> Before calling binarySearch method, compulsory list should be sorted, otherwise we will get unpredictable result.
--> If the list is sorted according to Comparator, then at the time of search operation, we have to pass same Comparator object otherwise we will get unpredictable result.

#### Example1:

```java
import java.util.ArrayList;
import java.util.Collections;
public class SearchExample {
    
    public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<String>();
        
        list.add("A");
        list.add("C");
        list.add("X");
        list.add("M");
		list.add("b");
      
        System.out.println("before sorting: "+list);
        Collections.sort(list);
        System.out.println("after sorting: "+list);
        System.out.println("binarySearch(list,C): "+Collections.binarySearch(list, "C"));
        System.out.println("binarySearch(list,N): "+Collections.binarySearch(list, "N"));
    }
}
```

Output:

```java
before sorting: [A, C, X, M, b]
after sorting: [A, C, M, X, b]
binarySearch(list,C): 1
binarySearch(list,N): -4
```

#### Example2:

```java
import java.util.ArrayList;
import java.util.Collections;
public class SearchExample {
    
    public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<String>();
        
        list.add("A");
        list.add("C");
        list.add("X");
        list.add("M");
		list.add("b");
		
		MyComparator myComparator = new MyComparator();
		
        System.out.println("before sorting: "+list);
        Collections.sort(list, myComparator);
        System.out.println("after sorting: "+list);
        System.out.println("binarySearch(list,C,myComparator): "+Collections.binarySearch(list, "C", myComparator));
        System.out.println("binarySearch(list,N,myComparator): "+Collections.binarySearch(list, "N", myComparator));
        System.out.println("binarySearch(list,T): "+Collections.binarySearch(list, "T"));
    }
}

class MyComparator implements Comparator<String>{

    @Override
    public int compare(String o1, String o2) {
        return o2.compareTo(o1);
    }
}
```

Output:

```java
before sorting: [A, C, X, M, b]
after sorting: [b, X, M, C, A]
binarySearch(list,C,myComparator): 3
binarySearch(list,N,myComparator): -3
binarySearch(list,T): -6
```

**Note:** For list of n elements in case of binarySearch method <br>
successful search result range: 0 to (n-1) <br>
unsuccessful search result range: -(n+1) to -1 <br>
Total result range: -(n+1) to (n-1) <br>

Eg. for 3 elements: <br>
successful search result range: 0 to 2 <br>
unsuccessful search result range: -4 to -1 <br>
Total result range: -4 to 2 <br>


## Reversing elements of List

Collections class defines following reverse methods to reverse elements of list

1. `public static void reverse(List<E> list)`

#### Example1:

```java
import java.util.ArrayList;
import java.util.Collections;
public class ReverseExample {
    
    public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<String>();
        
        list.add("A");
        list.add("C");
        list.add("X");
        list.add("M");
		list.add("b");
		
		System.out.println("Before reversing: "+list);
        Collections.reverse(list);
        System.out.println("After reversing: "+list);
    }
}
```

Output:

```java
Before reversing: [A, C, X, M, b]
After reversing: [b, M, X, C, A]
```

### reverse() vs reverseOrder()

We can use `reverse()` method to reverse order of elements of list whereas `reverseOrder()` to get reversed comparator.

Eg. `Comparator c1 = Collections.reverseOrder(Comparator c);` <br>
if c is meant for ascending order then c1 will result in descending order.



<br>

<div style="float:left">
  <a href="../3_collection_framework/1_6_version_enhancement.md" style=""><-- 1.6 version enhancement</a>
</div>


<div style="float:right">
  <a href="../5_arrays_class/arrays_class.md" style="">Next: Arrays class --></a>
</div>

<br>