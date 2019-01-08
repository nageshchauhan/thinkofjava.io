[Back to Collection](../README.md)

# Map [I, v1.2]

`Map` is not a child interface of `Collection`. <br>
If we want to represent a group of object as key value pair then we should go for `Map`.

--> Both key and value are objects. <br>
--> Duplicate keys are not allowed. <br>
--> Values can be duplicated. <br>
--> Each key value pair is called `Entry`, hence `Map` is considered as a collection of `Entry` objects. <br>

### Map interface methods
1. `V put(K key, V value)` <br>
To add one key value pair to the `Map`. If the key is already present then old value will be replaced with new value and returns old value.
e.g

```java
m.put("101","A"); // returns null
m.put("102","B"); // returns null
m.put("101","C"); // returns A
```

2. `void putAll(Map<K,V> m)` <br>
Copies all of the mappings from the specified map to this map


3. `Object get(K key)` <br>
Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.


4. `Object remove(K key)` <br>
Removes the mapping for a key from this map if it is present.


5. `boolean containsKey(K key)` <br>
Returns `true` if this map contains a mapping for the specified key.


6. `boolean containsValue(V value)` <br>
Returns `true` if this map has one or more keys to the specified value.


7. `boolean isEmpty()` <br>
Returns `true` if this map contains no key-value mappings.


8. `int size()` <br>
Returns the number of key-value mappings in this map.


9. `void clear()` <br>
Removes all of the mappings from this map (optional operation)

10. `Set<K> keySet()` <br>
Returns a `Set` view of the keys contained in this map.

11. `Collection<V> values()` <br>
Returns a `Collection` view of the values contained in this map


12. `Set<Map.Entry<K,V>> entrySet()` <br>
Returns a Set view of the mappings contained in this map.


## Entry interface

A `Map` is a group of key value pairs. Each key value pair is called `Entry`. Hence `Map` is considered as a collection of `Entry` objects. Without existence of `Map` object there is no chance of `Entry` object, hence `Entry` interface is defined inside `Map` interface.

```java
interface Entry<K,V>{
  K getKey();         //Entry specific methods 
  V getValue();       //and we can apply only
  V setValue(V value);//on entry object
}
```

## HashMap [class, v1.2]
--> Underlying data structure is Hashtable. <br>
--> Insertion order is not preserved and it is based on hashcode of keys. <br>
--> Duplicate keys are not allowed but values can be duplicated. <br>
--> Heterogeneous objects are allowed for both key and value. <br>
--> null is allowed for keys (only once).  <br>
--> null is allowed for values (any number of times). <br>
--> It implements Serializable and Cloneable but not RandomAccess interface. <br>
--> It is best choice if our frequent operation is search operation. <br>


### Constructors

1. `HashMap<K,V> m = new HashMap<K,V>()` <br>
Creates an empty `Hashmap` object with default initial capacity as `16` and default fill ratio `0.75`

2. `HashMap<K,V> m = new HashMap<K,V>(int initialCapacity)` <br>
Creates an empty `HashMap` object with specified initial capacity and default fill ratio 0.75

3. `HashMap<K,V> m = new HashMap<K,V>(int initialCapacity, float fillRatio)` 

4. `HashMap<K,V> m = new HashMap<K,V>(Map<K,V> map)`


### Example:

```java
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

public class HashMapExample {

    public static void main(String[] args) {
        
        HashMap m = new HashMap();
        m.put("A", 23);
        m.put("B", 324);
        m.put("C", 123);
        m.put("D", 332);
        System.out.println("Map: "+m);
        
        System.out.println("updating: "+m.put("D", 53));
        
        Set s = m.keySet();
        System.out.println("keySet: "+s);
        
        Collection c = m.values();
        System.out.println("values: "+c);
        
        Set s1 = m.entrySet();
        System.out.println("entrySet: "+s1);
        
        Iterator itr = s1.iterator();
        while(itr.hasNext()){
            Map.Entry m1 = (Map.Entry)itr.next();
            
            System.out.println(m1.getKey()+"--"+m1.getValue());
            if(m1.getKey().equals("C")){
                m1.setValue(789);
            }
        }
        System.out.println(m);
    }
}
```

Output:

```java
Map: {D=332, A=23, B=324, C=123}
updating: 332
keySet: [D, A, B, C]
values: [53, 23, 324, 123]
entrySet: [D=53, A=23, B=324, C=123]
D--53
A--23
B--324
C--123
{D=53, A=23, B=324, C=789}
```

### Difference between `HashMap` and `Hashtable`

#### HashMap
1. Every method in `HashMap` is not synchronized.
2. At a time multiple thread are allowed to operate and hence it not a thread safe.
3. Relatively performance is high because threads are not required to wait to operate on it.
4. `null` is allowed for both key and value.
5. Introduced in 1.2 version.

#### Hashtable
1. Every method is synchronized
2. At a time only one thread is allowed to operate hence it is thread safe.
3. Relatively performance is low because threads are required to wait to operate on it.
4. `null` is not allowed for key and value otherwise we will get `NullPointerException`.
5. Introduced in 1.0 version hence it is legacy class.

#### How to get synchronized version of `HashMap` object ?

By default `HashMap` is non synchronized but we can get synchronized version of `HashMap` by using `synchronizedMap()` method of `Collections` class.

```java
HashMap m = new HashMap();
Map m1 = Collections.synchronizedMap(m);
```



## LinkedHashMap [class, v1.4]

It is child class of `HashMap`. It is exactly same as `HashMap` (including methods and constructors) except the following differences

#### HashMap
1. The underlying data structure is `Hashtable`.
2. Insertion order is not preserved and it is based on Hashcode of keys.
3. Introduced in 1.2 version

#### LinkedHashMap
1. Underlying data structure is combination of `LinkedList` and `Hashtable`(hybrid data structure).
2. Insertion order is preserved.
3. Introduced in 1.4 version

In the example of `HashMap`, if we replace `HashMap` with `LinkedHashMap` then the order of insertion will be preserved.

`LinkedHashSet` and `LinkedHashMap` are commonly used for developing cache based applications.

#### Difference between `==` and `equals()`
In general `==` operator meant for reference comparison (address comparison) where as `equals()` meant for content comparison.

example:

```java
Integer i1 = new Integer(10);
Integer i2 = new Integer(10);
System.out.println(i1==i1); //false (compares reference)
System.out.println(i1.equals(i1)); //true (compares value)
```

## IdentityHashMap

It is exactly same as `HashMap` (including methods and constructors) except the following differences:

In case of `HashMap`, JVM will use `equals()` method to identify duplicate keys which is meant for content comparison. 

But in case of `IdentityHashMap`, JVM will use `==` operator to identify duplicate keys which is meant for reference comparison (memory address).

Example:

```java
HashMap m = new HashMap();
Integer i1 = new Integer(10);
Integer i2 = new Integer(10);
m.put(i1,"A");
m.put(i2,"B");
System.out.println(m); // {10=B}
```

`i1` and `i2` are duplicate keys because `i1.equals(i2)` returns `true`. If we replace `HashMap` with `IdentityHashMap` then `i1` and `i2` will not be duplicate keys because `i1==i2` returns `false`. In this case the output will be `{10=A,10=B}`.


## WeakHashMap

It is exactly same as `HashMap` except the following difference:

In case of `HashMap`, even though object doesn't have any reference, it is not eligible for GC if it is associated with `HashMap` ie `HashMap` dominates Garbage Collector.

But in case of `WeakHashMap`, if object doesn't contain any reference, it is eligible for GC, even though object associated with `WeakHashMap` ie GarbageCollector dominates `WeakHashMap`.

Example:

```java
import java.util.HashMap;
import java.util.WeakHashMap;

public class WeakHashMapExample {

    public static void main(String[] args) throws InterruptedException {
        HashMap m = new HashMap();
        Temp temp = new Temp();
        
        m.put(t, "A");
        System.out.println(m);
        
        t = null;
        System.gc();
        Thread.sleep(2000);
        System.out.println(m);
    }
}
class Temp{
    @Override
    public String toString() {
        return "temp";
    }
    
    @Override
    protected void finalize() throws Throwable {
        System.out.println("finalize method called");
    }
}
```

In the above example `temp` object not eligible for GC because it is associated with `HashMap`. In this case the output is

```java
{temp=A}
{temp=A}
```

If we replace `HashMap` with `WeakHashMap` then `temp` object eligible for GC so the output will be

```java
{temp=A}
finalize method called
{}
```


## SortedMap [I, v1.2]

It is child interface of `Map`. If we want to represent a group of key value pair according to some sorting order of keys then we should go for `SortedMap`.

Sorting is based on key but not based on value.

`SortedMap` defines following specific methods:

1. `K firstKey()`
2. `K lastKey()`
3. `SortedMap<K,V> headMap(K key)`
4. `SortedMap<K,V> tailMap(K key)`
5. `SortedMap<K,V> subMap(K key1, K key2)`
6. `Comparator comparator()`


## TreeMap [Class, v1.2]

--> The underlying data structure is RED-BLACK tree. <br>
--> Insertion order is not preserved and it is based on sorting order of keys. <br>
--> Duplicate keys are not allowed but values can be duplicated. <br>
--> If we are depending on default natural sorting order then keys should be homogeneous and comparable otherwise we will get runtime exception : `ClassCastException`. If we are defining sorting by `Comparator` then keys need not be homogeneous and comparable. We can take heterogeneous non-comparable objects also.

Whether we are depending on default natural sorting order or customized sorting order there are no restriction for values. It can take heterogeneous non-comparable objects also.

### Null acceptance

For non empty `TreeMap`, if we are trying to insert an entry with `null` key then we will get runtime exception saying `NullPointerException`.

For empty `TreeMap` as a first entry with `null` key is allowed but after inserting that entry if we are trying to insert any other entry then we will get `NullPointerException`.

**Note:** The above `null` acceptance rule applicable until 1.6 version. From 1.7 version onwards `null` is not allowed for key. But for values we can use `null` any number of times.

### Constructors

1. `TreeMap t = new TreeMap()` <br>
Constructs a new, empty tree map, using the natural ordering of its keys. All keys inserted into the map must implement the `Comparable` interface.

2. `TreeMap t = new TreeMap(Comparator c)` <br>
Constructs a new, empty tree map, ordered according to the given comparator. All keys inserted into the map must be mutually comparable by the given comparator.

3. `TreeMap t = new TreeMap(SortedMap m)` <br>
Constructs a new tree map containing the same mappings and using the same ordering as the specified `SortedMap`. This method runs in linear time.

4. `TreeMap t = new TreeMap(Map m)` <br>
Constructs a new tree map containing the same mappings as the given map, ordered according to the natural ordering of its keys. All keys inserted into the new map must implement the `Comparable` interface.

#### Example:

```java
import java.util.TreeMap;

public class TreeMapExample {

    public static void main(String[] args){
        TreeMap m = new TreeMap();
        m.put(101, "ABC");
        m.put(241, "DEF");
        m.put(522, "GHI");
        m.put(193, "JKL");
        
        //m.put("123","XYZ"); // ClassCastException will occur
        //m.put(null, "PQR"); //NullPointerException will ocurr.
        System.out.println(m);
    }
}
```

Output:

```java
{101=ABC, 193=JKL, 241=DEF, 522=GHI}
```

#### Example: reverse the order of inserted keys of TreeMap

```java
import java.util.Comparator;
import java.util.TreeMap;

public class ReverseOrderTreeMapKeys {

    public static void main(String[] args) {
        
        TreeMap m = new TreeMap(new MyComparator());
        m.put("ABC",101);
        m.put("JKL",522);
        m.put("EQD", 699);
        m.put("DEF",241);
        System.out.println(m);
    }
}

class MyComparator implements Comparator{

    @Override
    public int compare(Object o1, Object o2) {
        String str1 = o1.toString();
        String str2 = o2.toString();
                
        return str2.compareTo(str1);
    }
}
```

Output:

```java
{JKL=522, EQD=699, DEF=241, ABC=101}
```

## Hashtable

--> Underlying data structure is hashtable <br>
--> Insertion order is not preserved and it is based on **hashcode of keys** <br>
--> Duplicate keys are not allowed and values can be duplicate <br>
--> Heterogeneous objects are allowed for both keys and values <br>
--> `null` is not allowed for both key and value otherwise runtime exception ie `NullPointerException` will occur. <br>
--> It implements `Serializable` and `Cloneable` interfaces but not `RandomAccess`. <br>
--> Every method in it is synchronized and hence `Hashtable` object is Thread-safe <br>
--> It is best for frequent search operation. <br>

### Constructors

1. `Hashtable h = new Hashtable()` <br>
Constructs a new, empty hashtable with a default initial capacity (11) and load factor (0.75).

2. `Hashtable h = new Hashtable(int initialCapacity)` <br>
Constructs a new, empty hashtable with the specified initial capacity and default load factor (0.75).

3. `Hashtable h = new Hashtable(int initialCapacity, float fillRatio)` <br>
Constructs a new, empty hashtable with the specified initial capacity and the specified load factor.

4. `Hashtable h = new Hashtable(Map m)` <br>
Constructs a new hashtable with the same mappings as the given Map.

#### Example:

```java
import java.util.Hashtable;

public class Test {

    public static void main(String[] args){
        
        Hashtable h = new Hashtable();
        h.put(new Temp(5), "A");
        h.put(new Temp(2), "B");
        h.put(new Temp(6), "C");
        h.put(new Temp(15), "D");
        h.put(new Temp(23), "E");
        h.put(new Temp(16), "F");
        
        System.out.println(h);
    }
}

class Temp {
    int i;
    public Temp(int i){
        this.i = i;
    }
    public int hashCode(){
        return i;
    }    
    public String toString(){
        return i+"";
    }
}
```

Output:

```java
{6=C, 16=F, 5=A, 15=D, 2=B, 23=E}
```

Note: If we change hashCode code of above Temp class as

```java
public int hashCode(){
  return i%9;
}
```

the output of program will get changed.

**Note:** If we configure initialCapacity manually then the output will also vary.


## Properties

In our program if any thing which changes frequently (like password, mobile no) are not recommended to hardcode in java program because if there is any change then to reflect that change re-compilation, re-build, re-deploy application are required. Even some times server restart needed. It impact the application.

We can overcome this problem by using properties file. Such type of variable things we have to configure in properties file. From that properties file we can read in java program and use those properties. The main advantage of this approach is, if there is change in properties file, to reflect that change just re-deploy is enough which will not create much impact.

We can use java properties object to hold property which are coming from external properties file.

In `Map` (`HashMap`, `Hashtable`, `TreeMap`) key and value can be any type but in case of properties key and value both should be string type.

### Constructors

`Properties p = new Properties()`

### Methods

1. `String setProperty(String propertyName, String propertyValue)`

2. `String getProperty(String propertyName)`

3. `Enumeration propertyNames()`

4. `void load(InputStream is)` <br>
to load properties from property file into java properties object.

5. `void store(OutputStream os, String comment)` <br>
to store properties from java properties object to properties file.

#### Example:

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.Properties;

public class Test {

    public static void main(String[] args) throws Exception  {
        
        Properties p = new Properties();
        
        FileInputStream fis = new FileInputStream("abc.properties");
        p.load(fis);
        
        System.out.println(p);
        System.out.println(p.get("USERNAME"));
        
        p.setProperty("STATUS", "Done");
        
        FileOutputStream fos = new FileOutputStream("abc.properties");
        p.store(fos, "Updated by thinkofjava.io");
    }
}
```

##### abc. properties

```properties
USERNAME=abc
PASSWORD=password
```

#### Output:

```java
{USERNAME=abc, PASSWORD=password}
abc
```

##### abc.properties

```properties
#Updated by thinkofjava.io
#Tue Jan 08 16:06:09 IST 2019
STATUS=Done
USERNAME=abc
PASSWORD=password
```
