[Back to Collection](../README.md)

# 1.6 version enhancement in Collection framework

As a part of 1.6 version, following two concepts introduced in collection framework

## 1. `NavigableSet`
It is child interface of SortedSet and it defines several methods for navigation purposes.

NavigableSet defines following methods:

1. `E floor(e)` <br>
Returns the greatest element in this set less than or equal to the given element, or null if there is no such element.

2. `E lower(e)` <br>
Returns the greatest element in this set strictly less than the given element, or null if there is no such element.

3. `E ceiling(e)`
Returns the least element in this set greater than or equal to the given element, or null if there is no such element.

4. `E higher(e)`
Returns the least element in this set strictly greater than the given element, or null if there is no such element.

5. `E pollFirst()`
Retrieves and removes the first (lowest) element, or returns null if this set is empty.

6. `E pollLast()`
Retrieves and removes the last (highest) element, or returns null if this set is empty.

7. `NavigableSet<E> descendingSet()`
Returns NavigableSet over the elements in this set, in descending order.

### Example

```java
import java.util.TreeSet;
public class NavigableSetExample {
    
    public static void main(String[] args) {
		TreeSet<Integer> t = new TreeSet<Integer>();
        t.add(10);
        t.add(20);
        t.add(30);
        t.add(40);
        t.add(50);
        
        System.out.println("t: "+t);
        System.out.println("t.ceiling(20) : "+t.ceiling(20));
        System.out.println("t.higher(20) : "+t.higher(20));
        System.out.println("t.floor(30) : "+t.floor(30));
        System.out.println("t.lower(30) : "+t.lower(30));
        System.out.println("t.pollFirst() : "+t.pollFirst());
        System.out.println("t.pollLast() : "+t.pollLast());
        System.out.println("t.descendingSet() : "+t.descendingSet());
        System.out.println("t : "+t);
    }
}
```

Output:

```java
t: [10, 20, 30, 40, 50]
t.ceiling(20) : 20
t.higher(20) : 30
t.floor(30) : 30
t.lower(30) : 20
t.pollFirst() : 10
t.pollLast() : 50
t.descendingSet() : [40, 30, 20]
t : [20, 30, 40]
```

## 2. `NavigableMap`

It is child interface of SortedMap. 

It defined several methods for navigation purposes:

1. `K floorKey(key)`
Returns the greatest key less than or equal to the given key, or null if there is no such key.

2. `K lowerKey(key)`
Returns the greatest key strictly less than the given key, or null if there is no such key.

3. `K ceilingKey(key)`
Returns the least key greater than or equal to the given key, or null if there is no such key.

4. `K higherKey(key)`
Returns the least key strictly greater than the given key, or null if there is no such key.

5. `Map.Entry<K,V> pollFirstEntry()`
Removes and returns a key-value mapping associated with the least key in this map, or null if the map is empty.

6. `Map.Entry<K,V> pollLastEntry()`
Removes and returns a key-value mapping associated with the greatest key in this map, or null if the map is empty.


### Example: 

```java
import java.util.TreeMap;
public class NavigableMapExample {
    
    public static void main(String[] args) {
		TreeMap<String, String> t = new TreeMap<String, String>();
        t.put("b", "banana");
        t.put("c", "cat");
        t.put("a", "apple");
        t.put("d", "dog");
        t.put("g", "gun");
        
        System.out.println("t: "+t);
        System.out.println("t.ceilingKey(c) : "+t.ceilingKey("c"));
        System.out.println("t.higherKey(e) : "+t.higherKey("e"));
        System.out.println("t.floorKey(e) : "+t.floorKey("e"));
        System.out.println("t.lowerKey(e) : "+t.lowerKey("e"));
        System.out.println("t.pollFirstEntry() : "+t.pollFirstEntry());
        System.out.println("t.pollLastEntry() : "+t.pollLastEntry());
        System.out.println("t.descendingMap() : "+t.descendingMap());
        System.out.println("t : "+t);
    }
}
```

Output: 

```java
t: {a=apple, b=banana, c=cat, d=dog, g=gun}
t.ceilingKey(c) : c
t.higherKey(e) : g
t.floorKey(e) : d
t.lowerKey(e) : d
t.pollFirstEntry() : a=apple
t.pollLastEntry() : g=gun
t.descendingMap() : {d=dog, c=cat, b=banana}
t : {b=banana, c=cat, d=dog}
```


<br>

<div style="float:left">
  <a href="../3_collection_framework/1_5_version_enhancement.md" style=""><-- 1.5 version enhancement</a>
</div>


<div style="float:right">
  <a href="../4_collections_class/collections_class.md" style="">Next: Collections class --></a>
</div>


<br>