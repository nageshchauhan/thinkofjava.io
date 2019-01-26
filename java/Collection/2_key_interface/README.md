[Back to Collection](../README.md)

# Important interface in Collection

### 1) Collection(I)<br>

If we want to represent a group of individual object as a single entity then we should go for collection. Collection interface defines the most common methods which are applicable for any collection object. In general collection interface is considered as root interface of collection framework(In terms of functionality).

There is no concrete class which implements collection interface directly.

#### Difference between Collection(I) and Collections(Class)

`Collection` is an interface. If we want to represent a group of individual objects as a single entity then we should go for collection.

Collections is a utility class present in `java.util` package to define several utility methods for Collection objects (like sorting, searching etc.)


### 2) List(I)

It is child interface of `Collection`. If we want to represent a group of individual objects as a single entity where duplicates are allowed and insertion order must be preserved then we should go for `List`.

In 1.2 version `Vector` and `Stack` classes are re-engineered to implement `List` interface.

<img src="../../../assets/images/collections/list_interface.png"/>

### 3) Set(I)

It is child interface of `Collection`. If we want to represent a group of individual objects as a single entity where duplicates are not allowed and insertion order not required then we should go for `Set`.

<img src="../../../assets/images/collections/set_interface.png"/>

### 4) SortedSet(I)

It is child interface of `Set`. If we want to represent a group of individual objects as a single entity where duplicates are not allowed and all objects should be inserted according to some sorting order then we should go for `SortedSet`.

### 5) NavigableSet(I)

It is child interface of `SortedSet`. It contains several methods for navigation purposes.

<img src="../../../assets/images/collections/navigable_set.png"/>

### 6) Queue(I)
It is the child interface of `Collection`. If we want to represent a group of individual objects prior to processing then we should go for `Queue`. Usually queue follows First In First Out order but based on our requirement we can implement our own priority order.<br>
E.g. Before sending mail, all mail ids needs to be store in some data structure. The order in which we added mail ids, same order is maitained for delivery mail so for this requirement Queue is best choice.

<img src="../../../assets/images/collections/queue_interface.png"/>

#### Note: 
All the above interfaces(Collection, List, Set, SortedSet, NavigableSet and Queue) meant for representing a group of individual objects. If we want to represent a group of objects as key value pair then we should go for Map interface

### 7) Map(I)

`Map` is <b>not</b> a child interface of `Collection`. If we want to represent a  group of objects as key value pair then we should go for `Map`. Both key and value can be any objects. Duplicate keys are not allowed but values can be duplicated.

<img src="../../../assets/images/collections/map.png"/>


### 8) SortedMap(I)

It is child interface of Map. If we want to represent a group of key value pairs according to some sorting order of keys then we should go for SortedMap. In this map, the sorting should be based on key but not based on value.

### 9) NavigableMap(I)

It is the child interface of `SortedMap`. It defines several methods for navigation purposes.

<img src="../../../assets/images/collections/navigable_map.png"/>


-----------------
## Collection framework conclusion diagram

<img src="../../../assets/images/collections/collection_whole.png"/>

<img src="../../../assets/images/collections/map_whole.png"/>

The following are legacy entity present in Collection framework from version 1.0 <br>
1) Enumeration (Interface) <br>
2) Dictionary (Abstract class)<br>
3) Vector (Class) <br>
4) Stack (Class) <br>
5) Hashtable (Class) <br>
6) Properties (Class) <br>


<br>

<div style="float:left;">
<a href="../1_Introduction/README.md"><-- Introduction </a>
</div>


<div style="float:right">
  <a href="../3_collection_framework/collection.md" style="">Next: Collection --></a>
</div>

<br>