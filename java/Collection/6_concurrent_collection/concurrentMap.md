[Back to Collection](../README.md)

## ConcurrentMap (I, v1.5)

	Map
	 |
	 |
ConcurrentMap(I)
	 |
	 |
ConcurrentHashMap(Class)

ConcurrentMap defines following specific methods 

 1. `V putIfAbsent(K key, V value)`

This method will add the given Key Value pair as Entry if the key is not present in the map. If given key is already present then it will not override the value of existing one.

`Map` interface provides `put(k,v)` method which **will override** the value of given key if the key is already present in map.
Whereas `putIfAbsent(k,v)` of `ConcurrentMap` **will not override** the value of given key if the key is alreayd present.

#### Example:

```java
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
public class Example{
	public static void main(String[] args){
		ConcurrentMap<String, String> map = new ConcurrentHashMap<String, String>();
        map.putIfAbsent("A", "A");
        map.putIfAbsent("A", "B");
        System.out.println(map);
	}
}
```

Output:

```java
{A=A}
```

2. `boolean remove(K key, V value)` <br>

Removes the Entry if the key associated with specified value. In short while remove Entry from ConcurrentMap, it checks key and value both, if matched then only it will remove.

Example:

```java
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
public class Example{
	public static void main(String[] args){
		ConcurrentMap<String, String> map = new ConcurrentHashMap<String, String>();
        map.put("A", "A");
        map.remove("A", "B");
        System.out.println(map);
        map.remove("A", "A");
        System.out.println(map);
	}
}
```

Output:

```java
{A=A}
{}
```

3. `boolean replace(K key, V oldValue, V newValue)`

Replace the oldValue with newValue only if map contains key mapped to oldValue.

Example:

```java
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
public class Example{
	public static void main(String[] args){
		ConcurrentMap<String, String> map = new ConcurrentHashMap<String, String>();
        map.put("A", "A");
        map.remove("A", "B");
        System.out.println(map);
        map.remove("A", "A");
        System.out.println(map);
	}
}
```

Output:

```java
{A=A}
{A=C}
```

## ConcurrentHashMap [class, v1.5]

--> Underlying data structure is Hashtable.

--> ConcurrentHashMap allows concurrent read and thread safe update operations. 

--> To perform read operation, thread won't require any lock. But to perform update operation, thread requires lock, but the lock of only a particular part of map(bucket level/segment level).

--> Hashtable class uses object level lock for thread safety, but instead of whole map, concurrent update achieved by internally dividing map into Smaller portion which is defined by concurrency level.

--> The default concurrency level is 16.

--> ConcurrentHashMap allows simultaneous read operation and simultaneous 16 write/update operations by default.

--> `null` is not allowed for both key and value.

--> while one thread iterating, the other thread can perform update operation and ConcurrentHashMap never throw `ConcurrentModificationException`.

### Constructors

1. `ConcurrentHashMap chm = new ConcurrentHashMap();` <br>
creates an empty ConcurrentHashMap with default intitialCapacity (16), default fill ration (0.75) and default concurrency level (16).

2. `ConcurrentHashMap chm = new ConcurrentHashMap(int initialCapacity);`

3. `ConcurrentHashMap chm = new ConcurrentHashMap(int initialCapacity, float fillRatio);`

4. `ConcurrentHashMap chm = new ConcurrentHashMap(int initialCapacity, float fillRatio, int concurrencyLevel);`

5. `ConcurrentHashMap chm = new ConcurrentHashMap(Map m);`

### Example: 1

```java
import java.util.concurrent.ConcurrentHashMap;

public class ConcurrentHashMapTest {

    public static void main(String[] args) {
        ConcurrentHashMap<String, String> chm = new ConcurrentHashMap<String, String>();
        chm.put("101", "A");
        chm.put("102", "B");
        chm.putIfAbsent("103", "C");
        chm.putIfAbsent("101", "D");
        chm.remove("101","D");
        chm.replace("102", "B", "E");
        
        System.out.println(chm);
    }
}
```

Output:

```java
{101=A, 103=C, 102=E}
```

### Example: 2

```java
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;


public class ConcurrentHashMapTest extends Thread {
    
    static ConcurrentHashMap<String, String> chm = new ConcurrentHashMap<String, String>(); 
    
    public void run(){
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Child thread updating map ");
        chm.put("103", "C");
    }

    public static void main(String[] args) throws InterruptedException {
        
        chm.put("101", "A");
        chm.put("102", "B");
        
        ConcurrentHashMapTest obj = new ConcurrentHashMapTest();
        obj.start();
        
        Set<String> keySet = chm.keySet();
        Iterator<String> itr = keySet.iterator();
        
        while(itr.hasNext()){
            System.out.println("main method iterating and current value is : "+chm.get(itr.next()));
            Thread.sleep(3000);
        }
        System.out.println(chm);
    }
}
```

Output:

```java
main method iterating and current value is : A
Child thread updating map 
main method iterating and current value is : B
{101=A, 103=C, 102=B}
```

**Note:** In this example, the main method is creating another thread (child thread). Main thread is responsible for executing the iterator functionality of `ConcurrentHashMap`, whereas child thread is trying to update at the same time. Here both operation (iterating and updating) over map happening. The update operation on map will happen in safe manner so we will never get `ConcurrentModificationException` even there are huge number of thread.

If we replace `ConcurrentHashMap` with `HashMap`, then it is sure that we will get `ConcurrentModificationException`.


<br>

<div style="float:left">
  <a href="../6_concurrent_collection/need_of_concurrent_collection.md" style=""><-- Need of concurrent collection</a>
</div>


<div style="float:right">
  <a href="../6_concurrent_collection/dif_hashmap_and_concurrent_hashmap.md" style="">Next: Difference in HashMap and ConcurrentHashMap --></a>
</div>

<br>