[Back to Collection](../README.md)

# Arrays class

It is an utility class to define several utility methods for array.

## Sorting elements of Array

1. `public static void sort(primitive[] arr)`
To sort primitive type array according to Natural sorting order. Note: for each primitive type there are overloaded sort function, so based on parameter type, Arrays will call corresponding method.

2. `public static void sort(Object[] arr)`
To sort according to natural sorting order.

3. `public static void sort(Object[] arr, Comparator c)`
To sort given object type array according to customized sorting order defined in comparator.

#### Example:

```java
import java.util.Arrays;
public class SortingArrayExample {
    
    public static void main(String[] args) {
		int []intArray = {10,50,30,6,4,3};
        System.out.println("primitive array before sorting");
        for(int a : intArray){
            System.out.print(a+", ");
        }
        
        Arrays.sort(intArray);
        System.out.println("\n primitive array After sorting");
        for(int a : intArray){
            System.out.print(a+", ");
        }
        //--------------------------------------//
        String []strArray = {"A","E","S","F","O"};
        System.out.println("\n String array before sorting");
        for(String a : strArray){
            System.out.print(a+", ");
        }
        
        Arrays.sort(strArray);
        System.out.println("\n String array after sorting");
        for(String a : strArray){
            System.out.print(a+", ");
        }
        
        Arrays.sort(strArray, new MyComparator());
        System.out.println("\n String array after sorting by comparator");
        for(String a : strArray){
            System.out.print(a+", ");
        }
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
primitive array before sorting
10, 50, 30, 6, 4, 3, 
 primitive array After sorting
3, 4, 6, 10, 30, 50, 
 String array before sorting
A, E, S, F, O, 
 String array after sorting
A, E, F, O, S, 
 String array after sorting by comparator
S, O, F, E, A, 
```

**Note:** Primitive arrays can be sort only based on default natural sorting order. Whereas we can sort object array either based on default natural sorting order or based on customized sorting order.

### Searching elements of Array

Arrays class defines the following binary search methods:

1. `public static int binarySearch(primitive[] p, primitive target)`

2. `public static int binarySearch(Object[] a, Object target)`

3. `public static int binarySearch(Object[] a, Object target, Comparator<Object> c)`

**Note:** All rules of Arrays class binarySearch() methods are exactly same as Collections class binarySearch() method.

#### Example:

```java
import java.util.Arrays;
public class SearchingArrayExample {
    
    public static void main(String[] args) {
		int []intArray = {10,50,30,6,4,3};
        Arrays.sort(intArray);
        System.out.println("intArray after sorting: ");
        for(int a : intArray){
            System.out.print(a+", ");
        }
        System.out.println("\nbinarySearch(intArray,6): "+Arrays.binarySearch(intArray, 6));
        System.out.println("binarySearch(intArray,80): "+Arrays.binarySearch(intArray, 80));
        
        //--------------------------------------//
        String []strArray = {"A","E","S","F","O"};
        Arrays.sort(strArray);
        System.out.println("String array after sorting");
        for(String a : strArray){
            System.out.print(a+", ");
        }
        System.out.println("\nbinarySearch(strArray,Z): "+Arrays.binarySearch(strArray, "Z"));
        System.out.println("binarySearch(strArray,O): "+Arrays.binarySearch(strArray, "O"));

        MyComparator comparator = new MyComparator();
        Arrays.sort(strArray, comparator);
        System.out.println("String array after sorting by comparator");
        for(String a : strArray){
            System.out.print(a+", ");
        }
        System.out.println("\nbinarySearch(strArray,E,comparator): "+Arrays.binarySearch(strArray, "E", comparator));
        System.out.println("binarySearch(strArray,H,comparator): "+Arrays.binarySearch(strArray, "H", comparator));
        System.out.println("binarySearch(strArray,L): "+Arrays.binarySearch(strArray, "L"));
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
intArray after sorting: 
3, 4, 6, 10, 30, 50, 
binarySearch(intArray,6): 2
binarySearch(intArray,80): -7
String array after sorting
A, E, F, O, S, 
binarySearch(strArray,Z): -6
binarySearch(strArray,O): 3
String array after sorting by comparator
S, O, F, E, A, 
binarySearch(strArray,E,comparator): 3
binarySearch(strArray,H,comparator): -3
binarySearch(strArray,L): -6
```

### Conversion of Array to List

`public static List asList(Object[] arr)`

This method won't create an independent `List` object. For the existing array, we are getting List view.

--> By using array reference if we perform any change automatically that change will be reflected to list. Similarly by using List reference if we perform any change that change will be reflected automatically to array.

--> By using list reference we can't perform any operation which varies the size otherwise we will get `UnsupportedOperationException` at runtime
Eg. 

```java
list.add("D"); // Invalid operation
list.remove("A"); //invalid operation
list.set(1,"N"); //valid operation
```

--> By using list reference, we are not allowed to replace with heterogeneous objects otherwise `ArrayStoreException` will be thrown at runtime.
Eg. `l.set(1, new Integer(20));`

#### Example:

```java
import java.util.Arrays;
public class ArrayAsListExample {
    
    public static void main(String[] args) {
		String []strArray = {"A","E","S","F","O"};
        
        List list = Arrays.asList(strArray);
        System.out.println("list: "+list);
        
        strArray[0] = "U";
        System.out.println("list: "+list);
        list.set(1, "P");
        for(String s:strArray){
            System.out.print(s+", ");
        }
        
        //list.add("XYZ"); //UnsupportedOperationException will be thrown
        //list.remove(2); //UnsupportedOperationException will be thrown
        //list.set(1, new Integer(5)); // ArrayStoreException will be thrown
	}
}
```

Output:

```java
list: [A, E, S, F, O]
list: [U, E, S, F, O]
U, P, S, F, O,
```


<Br>

[<-- Collections class](../4_collections_class/collections_class.md) &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; [Next: Need of concurrent collection -->](../6_concurrent_collection/need_of_concurrent_collection.md)

<br>
