[Back to Collection](../README.md)

# List [I, v1.2]

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

<img src="../../../assets/images/collections/list_interface.png"/>

## ArrayList [Class, v1.2]

--> The underlying data structure is resizable array or growable array.<br>
--> Duplicates objects are allowed <br>
--> Insertion order is preserved <br>
--> Heterogeneous objects are allowed (Except TreeSet and TreeMap, every where heterogeneous objects are allowed)<br>
--> Null insertion is possible


### Constructors
1. `ArrayList l = new ArrayList()`<br>
Creates an empty ArrayList object with default initial capacity 10. Once it is reaches its max capacity then a new ArrayList object will be created with **new Capacity = ((Current capacity x 3/2) +1)**.

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

### RandomAccess[I, v1.4]
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

## LinkedList[Class, v1.2]
--> The underlying data structure is Doubly LinkedList.  <br>
--> Insertion order is preserved. <br>
--> Duplicate objects are allowed. <br>
--> Heterogeneous objects are allowed. <br>
--> Null insertion is possible. <br>
--> It implements Serializable and Cloneable interface. <br>
--> It is best, if our frequent operation is insertion or deletion in between. <br>
--> And it is worst, if our frequent operation is retrieval.

### Constructors
1. `LinkedList l = new LinkedList()`<br>
Creates an empty linked list object.

2. `LinkedList l = new LinkedList(Collection c)` <br>
Creates an equivalent linked list object for the given collection.

### LinkedList class specific methods:
Usually we can use linked list to develop stack and queue. To provide support for this requirement, linked list defines following methods:<br>
1. `void addFirst(Object o)` <br>
2. `void addLast(Object o)` <br>
3. `Object getFirst()`<br>
4. `Object getLast()`<br>
5. `Object removeFirst()`<br>
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
### Difference between ArrayList and LinkedList

#### ArrayList
1. It is best choice if our frequent operation is retrieval.
2. It is worst in case of frequent insertion or deletion because internally several shift operations are performed.
3. The elements are stored in consecutive memory location hence retrieval operation is easy.

#### LinkedList
1. It is best choice if our frequent operation is addition or deletion of element.
2. It is worst in case of frequent retrieval of elements.
3. The elements are not stored in consecutive memory location hence retrieval operation become complex


## Vector[class, v1.0]
1. The underlying data structure is resizable array or growable array. <br>
2. Insertion order preserved. <br>
3. Duplicate elements are allowed. <br>
4. Heterogeneous elements are allowed. <br>
5. Null insertion is possible. <br>
6. It implements `Serializable`, `Cloneable` and `RandomAccess` interface <br>
7. Every method is synchronized hence Vector object is thread safe.

### Constructors

1. `Vector v = new Vector()` <br>
Creates an empty vector object with default initial capacity 10. Once vector reaches its max capacity then a new vector object will be created with **New capacity = Current capacity x 2**.

2. `Vector v = new Vector(int initialCapacity)` <br>
Creates and empty vector object with specified initial capacity.

3. `Vector v = new Vector(int initialCapacity, int incrementalCapacity)`<br>

4. `Vector v = new Vector(Collection c)` <br>
Creates an equivalent vector object for given collection. This constructor meant for inter-conversion between collection objects.

### Vector specific method

**To Add objects** <br>
1. `add(Object o)` --- from collection interface <br>
2. `add(int index, Object o)` --- from list interface <br>
3. `addElement(Object o)` --- from Vector class

**To remove object/s** <br>
1. `remove(Object c)` --- from collection interface <br>
2. `remove(int index)` --- from list interface <Br>
3. `removeElement(Object o)` --- from vector class<br>
4. `removeElementAt(Object o)` --- from vector class <br>
5. `clear()` --- from collection interface <br>
6. `removeAllElements()` --- from vector class

**To retrieve Object**<br>
1. `Object get(int index)` --- from list interface <br>
2. `Object elementAt(int index)` --- from vector class <br>
3. `Object firstElement()` --- from vector class <br>
4. `Object lastElement()` --- from vector class  <br>

**Other methods** <br>
1. `int size()` <br>
2. `int capacity()` <br>
3. `Enumeration elements()` <br> 

###Example:

```java
import java.util.Vector;

public class VectorExample {

	public static void main(String[] args) {
		Vector v = new Vector();
		System.out.println(v.capacity());
		for(int i=0;i<10;i++){
			v.addElement(i);
		}
		System.out.println(v.capacity());
		v.addElement("A");
		System.out.println(v.capacity());
		System.out.println(v);
	}
}
```

Output:

```
10
10
20
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A]
```

## Stack[Class, v1.0]
It is child class of Vector class. This class is specially designed for Last In First Out(LIFO) order.

 
### Constructor

`Stack s = new Stack()`
 
### Methods
1. `Object push(Object o)` <br>
To insert an object into the stack

2. `Object pop()` <br>
to remove and return top of the stack

3. `Object peek()` <br>
to return top of the stack without removal

4. `boolean empty()` <br>
Returns true of stack is empty else false.

5. `int search(Object o)` <br>
Returns offset if the element is available otherwise returns -1

### Example:

```java
import java.util.Stack;

public class StackExample {

	public static void main(String[] args) {
		Stack s = new Stack();
		s.push("A");
		s.push("B");
		s.push("C");
		System.out.println(s);
		System.out.println(s.search("A"));
		System.out.println(s.search("Z"));
	}
}
```

Output:

```
[A, B, C]
3
-1
```

<br>


<div style="float:left">
  <a href="../3_collection_framework/collection.md" style=""><-- Collection</a>
</div>


<div style="float:right">
  <a href="../3_collection_framework/set.md" style="">Next: Set --></a>
</div>


<br>