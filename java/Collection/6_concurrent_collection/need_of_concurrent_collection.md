[Back to Collection](../README.md)

## Need of concurrent collection

Traditional collection objects (like `ArrayList`, `HashMap`, `HashSet` etc) can be accessed by multiple threads simultaneously and there may be chance of data inconsistency problem, hence these are not thread safe.

Already present thread safe collections (like `Vector`, `Hashtable`,  `synchoronizedList()` etc) are performance wise not upto the mark. Because for each operation even for read operation collection will be accessed by only one thread at a time hence it increases waiting time of threads.

Another big problem with traditional collection is while one thread iterating collection, other threads are not allowed to modify collection object simultaneously. If we are trying to modify list with multiple thread then will get `ConcurrentModificationException` at runtime.


#### Example:

```java
import java.util.ArrayList;
import java.util.Iterator;
public class ConcurrentExample extends Thread {
    
    static ArrayList<String> al = new ArrayList<String>();
    
    public void run(){
        try{
            Thread.sleep(2000);
        }catch(InterruptedException e){
            e.printStackTrace();
        }
        System.out.println("Child thread updating list");
        al.add("D");
    }
    
    public static void main(String[] args) throws InterruptedException {
        al.add("A");
        al.add("B");
        al.add("C");
        ConcurrentExample t = new ConcurrentExample();
        t.start();
        Iterator<String> itr = al.iterator();
        while(itr.hasNext()){
            System.out.println("main thread iterating list and current object is "+itr.next());
            Thread.sleep(1000);
        }
        System.out.println(al);
        
    }
}
```

Output:

```java
main thread iterating list and current object is A
main thread iterating list and current object is B
main thread iterating list and current object is C
Child thread updating list
Exception in thread "main" java.util.ConcurrentModificationException
	at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:859)
	at java.util.ArrayList$Itr.next(ArrayList.java:831)
	at ConcurrentExample.main(ConcurrentExample.java:22)
```

Hence these traditional collection objects are not suitable for scalable multi threaded environment. To overcome these problem java introduced concurrent collection in version 1.5


## Difference between Traditional collection and Concurrent collection

Concurrent collections are always thread safe.

Compared with thread safe traditional collection, performance of concurrent collection is high because of locking mechanism.

While one thread interacting with collection, the other thread are allowed to modify collection in safe manner.

Hence concurrent collections never throw `ConcurrentModificationException`.

The important concurrent classes are : <br>
1. `ConcurrentHashMap` <br>
2. `CopyOnWriteArrayList` <br>
3. `CopyOnWriteArraySet` <br>



<Br>

[<-- Arrays class](../5_arrays_class/arrays_class.md) &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; [Next: ConcurrentMap interface and its implementation classes -->](../6_concurrent_collection/concurrentMap.md)

<br>
