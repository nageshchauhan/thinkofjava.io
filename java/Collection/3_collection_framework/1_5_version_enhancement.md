[Back to Collection](../README.md)

# 1.5 version Enhancement

## Queue (I, v1.5)

It is child interface of `Collection`. If we want to represent a group of individual objects prior to processing then we should go for Queue.
For eg. before sending SMS message, all mobile numbers need to store in some data structure. The order in which we added mobile number in the same order message will be delivered. For this first in first out requirement, Queue is best choice.

### [Add diagram of queue hierarchy](queue_hierarchy_diagram.png)

Usually `Queue` follows first in first out order, but based on our requirement we can implement our own priority order as well `(PriorityQueue)`.
From 1.5 onwards, `LinkedList` class also implements `Queue` interface. `LinkedList` based implementation of `Queue` always follows FIFO order.

#### Queue interface specific methods

1. `boolean offer(E e)` <br>
Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions. When using a capacity-restricted queue, this method is generally preferable to add(E), which can fail to insert an element only by throwing an exception.

2. `boolean add(E e)` <br>
Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions, returning true upon success and throwing an `IllegalStateException` if no space is currently available.

3. `E peek()` <br>
Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.

4. `E element()` <br>
Retrieves, but does not remove, the head of this queue. This method differs from peek only in that it throws an exception if this queue is empty.

5. `E poll()` <br>
Retrieves and removes the head of this queue, or returns null if this queue is empty.

6. `E remove()` <br>
Retrieves and removes the head of this queue. This method differs from poll only in that it throws an exception if this queue is empty.

## PriorityQueue (Class, v1.5)

--> If we want to represent a group of individual objects prior to processing according to some priority then we should go for `PriorityQueue`. <br>
--> The priority can be either default natural sorting order or customized sorting order defined by `Comparator`. <br>
--> Insertion order is not preserved and it is based on some priority. <br>
--> Duplicate objects are not allowed. <br>
--> If we are depending on default natural sorting order, compulsory objects should be homogeneous and comparable otherwise we will get ClassCastExcecption at runtime. <br>
--> If we are defining our own sorting by comparator then object need not be homogeneous and comparable. <br>
--> null is not allowed even as first element. <br>


### Constructors

1. `PriorityQueue q = new PriorityQueue()` <br>
Creates an empty priority queue with default initial capacity (11) and all object will be inserted according to default natural sorting order.

2. `PriorityQueue q = new PriorityQueue(int initialCapacity)` <br>
Creates an empty priority queue with specified initial capacity that orders its element according to their natural ordering.

3. `PriorityQueue q = new PriorityQueue(int initialCapacity, Comparator c)` <br>
Creates an empty priority queue with specified initial capacity that orders its element according to specified comparator.

4. `PriorityQueue q = new PriorityQueue(SortedSet s)` <br>
Creates priority queue containing the elements in the specified sorted set.

5. `PriorityQueue q = new PriorityQueue(Collection c)`<br>
Creates priority queue containing the elements in the specified collection.

6. `PriorityQueue q = new PriorityQueue(PriorityQueue q)`
Creates priority queue containing the elements in the specified priority queue.


#### Example:

```java
import java.util.PriorityQueue;
public class PriorityQueueExample {
    public static void main(String[] args) {
        PriorityQueue q = new PriorityQueue();
        System.out.println(q.peek()); // return null if queue is empty
        //System.out.println(q.element());//throw RE: NoSuchElementException if queue is empty
        for(int i=0;i<10;i++){
            q.offer(i);
        }
        
        System.out.println(q);
        System.out.println(q.poll()); //remove and return head element
        System.out.println(q);
    }
}
```

Output:

```java
null
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
0
[1, 3, 2, 7, 4, 5, 6, 9, 8]
```

Note: Some platform won't provide proper support for Thread Priorities and PriorityQueue.

#### Example2:

```java
import java.util.Comparator;
import java.util.PriorityQueue;
public class PriorityQueueEx2 {
    
    public static void main(String[] args) {
		PriorityQueue q = new PriorityQueue(15, new MyComparator());
        
        q.offer("A");
        q.offer("Z");
        q.offer("L");
        q.offer("B");
        System.out.println(q);
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
[Z, L, B, A]
```

<br>


<div style="float:left">
  <a href="../3_collection_framework/map.md" style=""><-- Map</a>
</div>


<div style="float:right">
  <a href="../3_collection_framework/1_6_version_enhancement.md" style="">Next: 1.6 version enhancement--></a>
</div>


<br>