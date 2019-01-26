[Back to Collection](../README.md)

## CopyOnWriteArrayList (class, v1.5)

 It is thread safe version of `ArrayList`. As the name indicate `CopyOnWriteArrayList` creates a cloned copy of underlying `ArrayList` for every update operation. At certain point both will synchronized automatically which is taken care by JVM internally.
 
### Properties of CopyOnWriteArrayList
--> As update operation is performed on cloned copy, there is no effect for the threads which perform read operation. <br>
--> It is costly to use because for every update operation a cloned copy will be created. Hence `CopyOnWriteArrayList` is best choice if several read operation and less number of write operations are required to perform. <br>
--> Insertion order is preserved. <br>
--> Duplicate objects are allowed. <br>
--> Heterogenous objects are allowed. <br>
--> `null` insertion is possible. <br>
--> It implements `Serializable`, `Cloneaable` and `RandomAccess` interfaces. <br>
--> While one thread iterating on `CopyOnWriteArrayList`, the other threads are allowed to modify and we won't get `ConcurrentModificationException`. <br>
--> `Iterator` of `ArrayList` can perform remove operation but `Iterator` of `CopyOnWriteArrayList` can't perform remove operation. otherwise we will get `UnsupportedOperationException` at runtime.


### Constructors:

1. `CopyOnWriteArrayList<E> list = new CopyOnWriteArrayList<E>();`<br>
Creates an empty list.

2. `CopyOnWriteArrayList<E> list = new CopyOnWriteArrayList<E>(Collection<E> c);` <br>
Creates a list containing the elements of the specified collection, in the order they are returned by the collection's iterator.

3. `CopyOnWriteArrayList<E> list = new CopyOnWriteArrayList<E>(E[] toCopyIn);` <br>
Creates a list holding a copy of the given array.


### Methods:

1. `boolean addIfAbsent(E element)`
The element will be added if and only if list doesn't contain this element.

```java
CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<String>();
list.add("A");
list.add("A");
list.addIfAbset("B");
list.addIfAbset("B");
System.out.println(list);
```
Output:

```java
[A, A, B]
```

2. `int addAllAbsent(Collection<E> c)` <br>
The elements of collection will be added to the list if elements are absent and returns number of elements added.

```java
ArrayList<String> arrayList = new ArrayList<String>();
arrayList.add("A");
arrayList.add("B");
	
CopyOnWriteArrayList<String> cowal = new CopyOnWriteArrayList<String>();
cowal.add("A");
cowal.add("C");
System.out.println(cowal);
	
cowal.addAll(arrayList);
System.out.println(cowal);
	
ArrayList<String> arrayList2 = new ArrayList<String>();
arrayList2.add("A");
arrayList2.add("D");
	
cowal.addAllAbsent(arrayList2);
System.out.println(cowal);
```

Output:

```java
[A, C]
[A, C, A, B]
[A, C, A, B, D]
```

### Example: 1

```java
import java.util.ArrayList;
import java.util.concurrent.CopyOnWriteArrayList;

public class CopyOnWriteArrayListExample {

	public static void main(String[] args) {
		ArrayList<String> arrayList = new ArrayList<String>();
		arrayList.add("A");
		arrayList.add("B");
		
		CopyOnWriteArrayList<String> cowal = new CopyOnWriteArrayList<String>();
		cowal.addIfAbsent("A");
		cowal.addIfAbsent("C");
		System.out.println(cowal);
		
		cowal.addAll(arrayList);
		System.out.println(cowal);
		
		ArrayList<String> arrayList2 = new ArrayList<String>();
		arrayList2.add("A");
		arrayList2.add("D");
		
		cowal.addAllAbsent(arrayList2);
		System.out.println(cowal);
	}
}
```

Output:

```java
[A, C]
[A, C, A, B]
[A, C, A, B, D]
```

### Example: 2

```java
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;

public class CopyOnWriteArrayListExample extends Thread{

	static CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<String>();
	
	public void run(){
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		System.out.println("Child thread updating list");
		list.add("D");
		System.out.println("Child thread updated list");
	}
	
	public static void main(String[] args) throws InterruptedException {
		list.add("A");
		list.add("B");
		list.add("C");
		
		CopyOnWriteArrayListExample obj = new CopyOnWriteArrayListExample();
		obj.start();
		
		Iterator<String> itr = list.iterator();
		while(itr.hasNext()){
			System.out.println("main thread iterating list and current object is "+itr.next());
			Thread.sleep(2000);
		}
		System.out.println(list);
	}
}
```

Output:

```java
main thread iterating list and current object is A
Child thread updating list
Child thread updated list
main thread iterating list and current object is B
main thread iterating list and current object is C
[A, B, C, D]
```

In the above example, while main thread iterating list object, child thread is allowed to modify and we won't get `ConcurrentModificationException`.

But if we replace `CopyOnWriteArrayList` with `ArrayList` then we will get `ConcurrentModificationException`.

`Iterator` of `CopyOnWriteArrayList` can't perform remove operation, otherwise we will get `UnsupportedOperationException` at runtime. Example for the same is shown below:

### Example: 3

```java
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;

public class CopyOnWriteArrayListExample {

	public static void main(String[] args) throws InterruptedException {
	
		CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<String>();
		list.add("A");
		list.add("B");
		list.add("C");
		list.add("D");
		System.out.println(list);
		Iterator<String> itr = list.iterator();
		while(itr.hasNext()){
			if(itr.next().equals("D")){
				itr.remove();
			}
		}
		System.out.println(list);
	}
}
```

Output:

```java
[A, B, C, D]
Exception in thread "main" java.lang.UnsupportedOperationException
	at java.util.concurrent.CopyOnWriteArrayList$COWIterator.remove(CopyOnWriteArrayList.java:1178)
	at CopyOnWriteArrayListExample.main(ConCollection.java:17)
```

**Note:** If we replace `CopyOnWriteArrayList` with `ArrayList` then we won't get any Exception. And the output would be:

```java
[A, B, C, D]
[A, B, C]
```

### Example: 4

```java
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;

public class CopyOnWriteArrayListExample {

	public static void main(String[] args) throws InterruptedException {
	
		CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<String>();
		list.add("A");
		list.add("B");
		list.add("C");
		
		Iterator<String> itr = list.iterator();
		list.add("D");
		while(itr.hasNext()){
			System.out.print(itr.next()+" ");
		}
	}
}
```

Output:

```java
A B C 
```

**Note:** Every update operation is performed on separate copy, hence after getting iterator if we are trying to perform any modification operation to the list, it won't be reflected to iterator.

In the above program if we replace `CopyOnWriteArrayList` with `ArrayList` then we will get `ConcurrentModificationException` at runtime.


## Difference between ArrayList and CopyOnWriteArrayList

### ArrayList
1. It is not thread safe.
2. While one thread iterating list object, the other threads are not allowed to modify list otherwise we will get `ConcurrentModificationException`.
3. Iterator is fail-fast.
4. Iterator of ArrayList can perform remove operation.
5. Introduced in version 1.2

### CopyOnWriteArrayList
1. It is not thread safe because every update operation will be performed on separate cloned copy.
2. While one thread iterating list object, the other threads are allowed to modify list in safe manner and we won't get `ConcurrentModificationException`.
3. Iterator is fail-safe.
4. Iterator of `CopyOnWriteArrayList` can't perform remove operation otherwise we will get `UnsupportedOperationException` at runtime.
5. Introduced in version 1.5


## Difference in CopyOnWriteArrayList, synchronizedList() and Vector

### CopyOnWriteArrayList
1. We will get thread safety because every update operation is performed on separate cloned copy.
2. At a time, multiple threads are allowed to access/operate on CopyOnWriteArrayList.
3. While one thread iterating list object, the other threads are allowed to modify and we won't get `ConcurrentModificationException`.
4. Iterator is fail-safe and never raise `ConcurrentModificationException`.
5. Iterator can't perform remove operation otherwise we will get `UnsupportedOperationException` at runtime.
6. Introduced in 1.5 version.

### synchronizedList()
1. We will get thread safety because list can be accessed by only one thread at a time.
2. At a time only one thread is allowed to perform any operation.
3. While one thread iterating list object, other threads are not allowed to perform any operation otherwise we will get `ConcurrentModificationException`.
4. Iterator is fail-fast and it will raise `ConcurrentModificationException`.
5. Iterator can perform remove operation.
6. Introduced in 1.2 version.

### Vector
1. We will get thread safety because vector can be accessed by only one thread at a time.
2. At a time only one thread is allowed to perform any operation.
3. While one thread iterating vector object, other threads are not allowed to perform any operation otherwise we will get `ConcurrentModificationException`.
4. Iterator is fail-fast and it will raise `ConcurrentModificationException`.
5. Iterator can perform remove operation.
6. Introduced in 1.0 version.



<Br>

[<-- Difference in ConcurrentHashMap, synchronizedMap, and Hashtable](../6_concurrent_collection/dif_concurrentmap_synchronizedmap_hashtable.md) &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; [Next: CopyOnWriteArraySet class -->](../6_concurrent_collection/copy_on_write_arrayset_class.md)

<br>
