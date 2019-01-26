[Back to Collection](../README.md)

# Set [I, v1.2]

<img src="../../../assets/images/collections/set_whole.png"/>

It is a child interface of `Collection`. If we want to represent a group of individual objects as a single entity where duplicates are not allowed and insertion order is not preserved.

This interface doesn't contain any new method and we have to use only `Collection` interface methods

## HashSet [class, v1.2]

--> The underlying data structure is Hashtable. <br>
--> Duplicate objects are not allowed. <br>
--> Insertion order is not preserved and it is based on hashCode of objects. <br>
--> Null insertion is possible (only once). <br>
--> Heterogenous objects are allowed. <br>
--> Implements `Serializable` and `Clonable` but not `RandomAccess` interface.
--> It is best suitable if frequent operation is searching.

**Note:** In HashSet duplicates are not allowed. If we are trying to insert duplicates then we won't get any compile time or run time error and add() method simply returns false.

Eg.

```java
HashSet s = new HashSet();
s.add("A"); // returns true
s.add("A"); // returns false
```

### Constructors

1. `HashSet h = new HashSet();` <br>
Creates an empty HashSet object with default initial capacity **16** and default fill ratio **0.75**

2. `HashSet h = new HashSet(int initialCapacity);` <br>
Creates an empty HashSet object with specified initial capacity and default fill ration **0.75**

3. `HashSet h = new HashSet(int initialCapacity, float fillRatio);` <br>
Creates an empty HashSet object with specified initial capacity and specified fill ratio.

4. `HashSet h = new HashSet(Collection c);` <br>
Creates an equivalent HashSet for the given collection. This constructor meant for inter conversion between collection objects.

#### What is Fill ratio or Load factor ?

Load Factor determines how full the HashMap can be before it is resized upward. When the number of elements is greater than the capacity of the HashMap multiplied by its load factor/fill ratio, the HashMap is expanded. Default value of load factor is 0.75.

#### [Imp] Why the default fill ratio of HashSet is 0.75 ?

As per the [java documentation](https://docs.oracle.com/javase/7/docs/api/java/util/HashMap.html),  the default load factor (.75) offers a good tradeoff between time and space costs. Higher values decrease the space overhead but increase the lookup cost (reflected in most of the operations of the `HashMap` class, including `get` and `put`). The expected number of entries in the map and its load factor should be taken into account when setting its initial capacity, so as to minimize the number of rehash operations. If the initial capacity is greater than the maximum number of entries divided by the load factor, no rehash operations will ever occur.

[This article](http://javabypatel.blogspot.com/2015/10/what-is-load-factor-and-rehashing-in-hashmap.html) explain the reason for fill ratio and how it should be kept.

### Example:

```java
import java.util.HashSet;

public class ListExample {

	public static void main(String[] args) {
		
		HashSet set = new HashSet();
		set.add("A");
		set.add("B");
		set.add("C");
		set.add("Z");
		set.add(null);
		set.add(10);
		
		System.out.println(set.add("Z"));
		System.out.println(set);
		
	}
}
```

Output:

```
false
[null, A, B, C, Z, 10]
```

## LinkedHashSet [class, v1.4]

It is child class of HashSet. It is exactly same as HashSet (including constructors and methods) except the following difference <br>
--> the underlying data structure is combination of Hashtable and LinkedList. <br>
--> Insertion order preserved. <br>

### Example:

```java
import java.util.LinkedHashSet;

public class ListExample {

	public static void main(String[] args) {
		
		LinkedHashSet set = new LinkedHashSet();
		set.add("A");
		set.add("B");
		set.add("C");
		set.add("Z");
		set.add(null);
		set.add(10);
		
		System.out.println(set.add("Z"));
		System.out.println(set);
		
	}
}
```

Output:

```
false
[A, B, C, Z, null, 10]
```

**Note:** In general, we can use LinkedHashSet to develop cache based applications where duplicates are not allowed and insertion order must be preserved.


## SortedSet [Interface, v1.2]

It is child interface of `Set`. If we want to represent a group of individual objects according to some sorting order without duplicate value then we should go for `SortedSet`.

SortedSet interface defines following specific methods:<br>
1. `Object first()` <br>
Returns first element of the SortedSet.

2. `Object last()` <br>
Returns last element of the SortedSet.

3. `SortedSet headSet(Object obj)` <br>
Returns SortedSet whose elements are less than obj

4. `SortedSet tailSet(Object obj)` <br>
Returns SortedSet whose elements are >= obj

5. `SortedSet subSet(Object obj1, Object obj2)` <br>
Returns SortedSet whose elements are >= obj1 and < obj2

6. `Comparator comparator()` <br>
Returns Comparator object that describes underlying sorting technique. If we are using default sorting order then we will get null.

**Note:** Default natural sorting order for number is Ascending order and for String objects it is Alphabetical order.

### Example:

```java
import java.util.SortedSet;
import java.util.TreeSet;

public class ListExample {

	public static void main(String[] args) {
		
		SortedSet<Integer> set = new TreeSet<Integer>();
		
		set.add(100);
		set.add(101);
		set.add(104);
		set.add(106);
		set.add(110);
		set.add(115);		
		set.add(120);
		
		System.out.println("All elements: "+set);
		System.out.println("first: "+set.first());
		System.out.println("last: "+set.last());
		System.out.println("headSet(106): "+set.headSet(106));
		System.out.println("tailSet(106): "+set.tailSet(106));
		System.out.println("subSet(101,115): "+set.subSet(101, 115));
	}
}
```

Output: 

```
All elements: [100, 101, 104, 106, 110, 115, 120]
first: 100
last: 120
headSet(106): [100, 101, 104]
tailSet(106): [106, 110, 115, 120]
subSet(101,115): [101, 104, 106, 110]
```

## TreeSet [class, v1.2]

--> Underlying data structure is Balanced Tree. <br>
--> Duplicate objects are not allowed. <br>
--> Insertion order is not preserved. <br>
--> Heterogeneous objects are not allowed otherwise we will get Runtime Exception saying ClassCastException. <br>
--> Null insertion is allowed (only once)[till 1.6 verion]. <br>
--> Implements `Serializable` and `Cloneable` but not `RandomAccess`. <Br>
--> All objects will be inserted based on some sorting order, it may be default natural sorting order or customized sorting order

### Constructor
1. `TreeSet t = new TreeSet()` <br>
Creates an empty `TreeSet` object where the elements will be inserted according to default natural sorting order.

2. `TreeSet t = new TreeSet(Comparator c)` <br>
Creates an empty `TreeSet` object where the elements will be inserted according to customized sorting order specified by `Comparator` object.

3. `TreeSet t = new TreeSet(Collection c)` <br>
4. `TreeSet t = new TreeSet(SortedSet s)`

### Example: 1

```java
import java.util.TreeSet;

public class TreeSetExample {

	public static void main(String[] args) {
		
		TreeSet t = new TreeSet();
		
		t.add("A");
		t.add("a");
		t.add("B");
		t.add("Z");
		t.add("T");
		//t.add(new Integer(4));// will throw ClassCastException
		//t.add(null); // will throw NullPointerException
		
		System.out.println(t);
	}
}
```

Output:

```
[A, B, T, Z, a]
```

### Null Acceptance

1. For non empty `TreeSet`, if we are trying to insert `null` then we will get `NullPointerException`.
2. For empty `TreeSet`, as a first element `null` is allowed but after inserting `null` if we try to insert any other element then we will get Runtime exception saying NullPointerException.

**Note**: Until 1.6 version null is allowed as first element to empty `TreeSet` but from 1.7 onwards null is not allowed even as first element. So from 1.7 version onwards null is not allowed in `TreeSet`.

### Example: 2

```java
import java.util.TreeSet;

public class ListExample {

	public static void main(String[] args) {
		
		TreeSet t = new TreeSet();
		t.add(new StringBuffer("A"));
		t.add(new StringBuffer("B"));
		t.add(new StringBuffer("Z"));
		t.add(new StringBuffer("L"));
		
		System.out.println(t);
	}
}
```

Output:

```java
Exception in thread "main" java.lang.ClassCastException: java.lang.StringBuffer cannot be cast to java.lang.Comparable
	at java.util.TreeMap.compare(TreeMap.java:1294)
	at java.util.TreeMap.put(TreeMap.java:538)
	at java.util.TreeSet.add(TreeSet.java:255)
```

If we are depending on default natural sorting order, compulsory the object should be **homogeneous** and **comparable**, otherwise we will get runtime exception saying ClassCastException. An object is said to be comparable iff corresponding class implements `Comparable` interface. 

`String` class and all wrapper classes already implements `Comparable` interface, but `StringBuffer` class doesn't implement `Comparable` interface hence we got ClassCastException in this example.


If we are depending on default natural sorting order then while adding object into `TreeSet`, jvm will call `compareTo()` method.

```java
TreeSet t = new TreeSet();
t.add("K");
t.add("Z");
t.add("A");
t.add("A");
```

output

```java
[A, K, Z]
```

<br>

<div style="float:left">
  <a href="../3_collection_framework/list.md" style=""><-- List</a>
</div>


<div style="float:right">
  <a href="../3_collection_framework/cursor.md" style="">Next: Cursors--></a>
</div>

<br>