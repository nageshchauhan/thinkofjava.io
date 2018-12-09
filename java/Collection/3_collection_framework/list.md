[Back to Collection](../README.md)

# List (I)

List is child interface of Collection. If we want to represent a group of individual object as a single entity where duplicates are allowed and insertion order must be preserved, then we should go for List.

We can preserve insertion order via index and we can differentiate duplicate objects by using index. Hence index plays important role in List.

### List interface defines the following specific methods:<br>
1. `void add(int index, Object o)` <br>
2. `boolean addAll(int index, Collection c)` <br>
3. `Object get(int index)` <br>
4. `Object remove(int index)` <br>
5. `Object set(int index, Object new)`
6. `int indexOf(Object o)` <br>
7. `int lastIndexOf(Object o)` <br>
8. `ListIterator listIterator()`

### Various classes which implements List
1. ArrayList [class, v1.2]
2. LinkedList [class, v1.2]
3. Vector [class, v1.0]
4. Stack [class, v1.0]

## ArrayList [class, v1.2]

--> The underlying data structure is resizable array or growable array.<br>
--> Duplicates objects are allowed <br>
--> Insertion order is preserved <br>
--> Heterogeneous objects are allowed (Except TreeSet and TreeMap, every where heterogeneous objects are allowed)<br>
--> Null insertion is possible


### Constructors
1. `ArrayList l = new ArrayList()`<br>
Creates an empty ArrayList object with default initial capacity 10. Once it is reaches its max capacity then a new ArrayList object will be created with new Capacity = ((Current capacity * 3/2) +1).

2. `ArrayList l = new ArrayList(int initialCapacity)`<br>
Creates an empty ArrayList object with specified initial capacity.

3. `ArrayList l = new ArrayList(Collection c)` <br>
Creates an equivalent ArrayList object for the given collection.

Example:

```java
import java.util.ArrayList;

public class ListExample {

	public static void main(String[] args) {
		
		ArrayList l = new ArrayList();
		l.add("A");
		l.add(10);
		l.add("A");
		l.add(null);
		System.out.println(l);
		l.remove(2);
		System.out.println(l);
		l.add(2, "M");
		l.add("N");
		System.out.println(l);
	}
}
```

Output:

```
[A, 10, A, null]
[A, 10, null]
[A, 10, M, null, N]
```

Usually we can use collection to hold and transfer object from one location to another(container). To provide support for this requirement, every collection class implements Serializable and Cloneable interface.

ArrayList and Vector classes implements RandomAccess interface so that any random element can be accessed with same speed.

### RandomAccess(I)
This interface present in `java.util` package and it doesn't have any methods. It is a marker interface, where required ability will be provided automatically by JVM.

ArrayList is **best** if our frequent operation is retrieval (because ArrayList implements RandomAccess interface).

ArrayList is **worst** if our frequent operation is insertion or deletion in between.

### Difference between ArrayList and Vector
#### ArrayList
1. Every method is non-synchronized.
2. At a time multiple threads are allowed to operate on this object, hence it is not a thread-safe.
3. Relatively performance is high because threads are not required to wait to operate on this object.
4. Introduced in 1.2 version and it is non legacy class.

#### Vector
1. Every method is synchronized.
2. At a time only one thread is allowed to operate on this object, hence it is thread-safe.
3. Relatively performance is low because threads are required to wait to operate on this object.
4. Introduced in 1.0 version and it is legacy class.



### How to get synchronized version of ArrayList object
By default ArrayList is non-synchronized but we can get synchronized version of ArrayList object by using `synchronizedList()` method of `Collections` class.

`public static List synchronizedList(List l);`

Ex:

```java
ArrayList l = new ArrayList();
List l1 = Collections.synchronizedList(l);
```

Similarly we can get synchronized version of Set and Map object by using synchronizedSet() and synchronizedMap() respectively of Collections class

`public static Set synchronizedSet(Set s);`<br>
`public static Map synchronizedMap(Map m);`

## LinkedList(Class)
The underlying data structure is Doubly LinkedList.  <br>
Insertion order is preserved. <br>
Duplicate objects are allowed. <br>
Heterogeneous objects are allowed. <br>
Null insertion is possible. <br>
It implements Serializable and Cloneable interface. <br>
It is best, if our frequent operation is insertion or deletion in between. <br>
And it is worst, if our frequent operation is retrieval.

### Constructors
1. `LinkedList l = new LinkedList()`<br>
Creates an empty linked list object.

2. `LinkedList l = new LinkedList(Collection c)` <br>
Creates an equivalent linked list object for the given collection.

### LinkedList class specific methods:
Usually we can use linked list to develop stack and queue. To provide support for this requirement, linked list defines following methods:<br>
1. `void addFirst(Object o)`
2. `void addLast(Object o)`
3. `Object getFirst()`
4. `Object getLast()`
5. `Object removeFirst()`
6. `Object removeLast()`

Example:

```java
import java.util.LinkedList;

public class LinkedListExample {

	public static void main(String[] args) {
		LinkedList l = new LinkedList();
		l.add("A");
		l.add(10);
		l.add(null);
		l.add("A");
		System.out.println(l);
		
		l.set(0, "E");
		l.add(0, "H");
		System.out.println(l);
		
		l.removeLast();
		l.addFirst("T");
		System.out.println(l);
	}
}
```
Output:

```
[A, 10, null, A]
[H, E, 10, null, A]
[T, H, E, 10, null]
```


## Vector(class)

## Stack(Class)