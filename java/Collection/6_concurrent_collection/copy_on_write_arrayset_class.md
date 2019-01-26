[Back to Collection](../README.md)

## CopyOnWriteArraySet (class, v1.5)

--> It is thread safe version of `Set`. <br>
--> Internally implement `CopyOnWriteArrayList`. <br>
--> Insertion order is preserved. <br>
--> Heterogenous objects are allowed. <br>
--> `null` insertion is possible. <br>
--> Duplicate objects are not allowed. <br>
--> Multiple threads can perform read operation simultaneously but for every update operation(add, set, remove) a separate cloned copy will be created. <br>
--> It is best suited for applications in which set sizes generally stay small, read-only operations vastly outnumber mutative operations, and you need to prevent interference among threads during traversal. <br>
--> While one thread iterating set, the other thread are allowed modify and we won't get `ConcurrentModificationException`.
--> Iterator of `CopyOnWriteArraySet` can only perform read operation, it won't perform remove operation otherwise will get `UnsupportedOperationException` at runtime.


### Constructors:

1. `CopyOnWriteArraySet<E> list = new CopyOnWriteArraySet<E>();`<br>
Creates an empty set.

2. `CopyOnWriteArraySet<E> list = new CopyOnWriteArraySet<E>(Collection<E> c);` <br>
Creates a set containing the elements of the specified collection.



### Methods:

There is no new function introduced by this class. It provides functions from implemented interface.


### Example: 1

```java
import java.util.concurrent.CopyOnWriteArraySet;

public class CopyOnWriteArraySetExample {

	public static void main(String[] args) throws InterruptedException {
	
		CopyOnWriteArraySet set = new CopyOnWriteArraySet();
		set.add("A");
		set.add("B");
		set.add("C");
		set.add("A");
		set.add(null);
		set.add(10);
		set.add("D");
		System.out.println(set);
	}
}
```

Output:

```java
[A, B, C, null, 10, D]
```


## Difference between CopyOnWriteArraySet and synchronizedSet()


### CopyOnWriteArrayList
1. It is thread safe because every update operation will be performed on separate cloned copy.
2. While one thread iterating set object, the other threads are allowed to modify set in safe manner and we won't get `ConcurrentModificationException`.
3. Iterator is fail-safe.
4. Iterator of `CopyOnWriteArraySet` can't perform remove operation otherwise we will get `UnsupportedOperationException` at runtime.
5. Introduced in version 1.5


### synchronizedSet()
1. It is thread safe because at a time only one thread allow to perform operation.
2. While one thread iterating set object, the other threads are not allowed to modify set otherwise we will get `ConcurrentModificationException`.
3. Iterator is fail-fast.
4. Iterator can perform both read and remove operations.
5. Introduced in version 1.2


<br>

<div style="float:left">
  <a href="../6_concurrent_collection/copy_on_write_arraylist_class.md" style=""><-- CopyOnWriteArrayList class</a>

  
<br>