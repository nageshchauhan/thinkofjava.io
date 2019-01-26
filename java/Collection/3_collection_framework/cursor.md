[Back to Collection](../README.md)

# Cursors

If we want to get object one by one from collection then we should go for cursor. There are three types of cursor available in java:

1. Enumeration
2. Iterator
3. ListIterator

### 1. Enumeration[interface, v1.0]: <br>
 We can use enumeration to get objects one by one from legacy collection object. 

#### Methods in Enumeration

1. `public boolean hasMoreElements()` <br>
2. `public Object nextElement()`

#### Example:

```java
import java.util.Enumeration;
import java.util.Vector;

public class EnumerationExample {

	public static void main(String[] args) {
		Vector v = new Vector();
		for(int i=0;i<10;i++){
			v.addElement(i);
		}
		System.out.println(v);
		
		Enumeration e = v.elements();
		
		while(e.hasMoreElements()){
			Integer a = (Integer)e.nextElement();
			if(a%2==0){
				System.out.println();
			}else{
				System.out.println(a+" will be removed");
				v.remove(a);
				System.out.println(v);
			}
		}
		
	}
}
```

Output:

```
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

1 will be removed
[0, 2, 3, 4, 5, 6, 7, 8, 9]
3 will be removed
[0, 2, 4, 5, 6, 7, 8, 9]
5 will be removed
[0, 2, 4, 6, 7, 8, 9]
7 will be removed
[0, 2, 4, 6, 8, 9]
9 will be removed
[0, 2, 4, 6, 8]
```

#### Limitations of Enumeration
1. We can apply Enumeration concept only for legacy collection classes. It is not universal cursor.
2. By using Enumeration we can get only read access and we can't perform remove operation.

To overcome above limitations, we should go for Iterator.

### 2. Iterator[I, v1.2]
We can apply iterator concept for any collection object hence it is universal cursor. By using iterator, we can perform both read and remove operations.

We can create `Iterator` object by using `iterator()` method.

`public Iterator iterator()`

#### Methods in Iterator

1. `public boolean hasNext()`
2. `public Object next()` 
3. `public void remove()`

#### Example:

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class IteratorExample {

	public static void main(String[] args) {
		List<Integer> list = new ArrayList<Integer>();
		for(int i=0;i<=10;i++){
			list.add(i);
		}
		System.out.println(list);
		
		Iterator<Integer> itr = list.iterator();
		while(itr.hasNext()){
			Integer a = itr.next();
			if(a%2==0){
				System.out.println(a);
			}else{
				itr.remove();
			}
		}
		System.out.println(list);
	}
}
```

Output:

```
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
0
2
4
6
8
10
[0, 2, 4, 6, 8, 10]
```

#### Limitations of Iterator
1. By using Enumeration and Iterator, we can always move only towards forward direction. We can't move backward direction.  These are single direction cursors.
2. We can perform only read and remove operations. We can't perform addition or replacement of object.

To overcome above limitations, we should go for ListIterator. 

### 3. ListIterator

We can move forward or backward  by using ListIterator. Hence it is bidirectional cursor. We can perform replacement and addition of new objects in addition to Read and Remove operations.

We can create `ListIterator` by using `listIterator()` of `List` interface.

`public ListIterator listIterator()`

Eg. `ListIterator ltr = list.listIterator()` // where list is any List object

ListIterator is child interface of Iterator. Hence all methods present in iterator by default available to the ListIterator.

#### Methods of ListIterator
1. `public boolean hasNext()`
2. `public Object next()`
3. `public int nextIndex()`
4. `public boolean hasPrevious()`
5. `public Object previous()`
6. `public int previousIndex()`
7. `public void remove()`
8. `public void add(Object o)`
9. `public void set(Object o)`

#### Example:

```java
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;

public class ListIteratorExample {

	public static void main(String[] args) {
		List<String> list = new LinkedList<String>();
		list.add("A");
		list.add("B");
		list.add("C");
		list.add("D");
		System.out.println(list); // [A, B, C, D]
		
		ListIterator<String> ltr = list.listIterator();
		while(ltr.hasNext()){
			String s = ltr.next();
			if(s.equals("B")){
				ltr.remove(); // [A, C, D]
			}else if(s.equals("D")){
				ltr.add("E"); // [A, C, D, E]
			}else if(s.equals("C")){
				ltr.set("F"); // [A, F, D, E]
			}
		}
		System.out.println(list);
	}
}
```

Output:

```
[A, B, C, D]
[A, F, D, E]
```

The most powerful cursor is ListIterator but its limitation is that it is applicable for List object.

Internal implementations of cursor:

```java
import java.util.Enumeration;
import java.util.Iterator;
import java.util.ListIterator;
import java.util.Vector;

public class CursorExample {

	public static void main(String[] args) {
		Vector v = new Vector();
		
		Enumeration e = v.elements();
		Iterator itr = v.iterator();
		ListIterator litr = v.listIterator();
		
		System.out.println(e.getClass().getName());
		System.out.println(itr.getClass().getName());
		System.out.println(litr.getClass().getName());
		
	}
}
```

Output:

```
java.util.Vector$1. // 1 represent anonymous class
java.util.Vector$Itr
java.util.Vector$ListItr
```
Comparison table for cursors:

<table border="1">
    <tr>
        <th>Property</th>
        <th>Enumeration (v1.0)</th>
        <th>Iterator (v1.2)</th>
        <th>ListIterator (v1.2)</th>
    </tr>
    <tr>
        <th>Is it legacy?</th>
        <td>Yes</td>
        <td>No</td>
        <td>No</td>
    </tr>
    <tr>
        <th>It is applicable</th>
        <td>only for legacy classes</td>
        <td>for any collection objects</td>
        <td>only for List type objects</td>
    </tr>
    <tr>
        <th>Movement</th>
        <td>Single direction (forward)</td>
        <td>Single direction (forward)</td>
        <td>Bi-direction (forward & backward)</td>
    </tr>
    <tr>
        <th>How to get it?</th>
        <td>By using elements() method</td>
        <td>By using iterator() method</td>
        <td>By using listIterator() method</td>
    </tr>
    <tr>
        <th>Accessibility</th>
        <td>only read</td>
        <td>read and remove</td>
        <td>read / remove / add / replace</td>
    </tr>
    <tr>
        <th>Method</th>
        <td>hasMoreElements(), nextElement()</td>
        <td>hasNext(), next(), remove()</td>
        <td>9 methods</td>
    </tr>
</table>


<Br>

[<-- Set](../3_collection_framework/set.md) &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; [Next: Comparable and Comparator -->](../3_collection_framework/comparable_and_comparator.md)

<br>
