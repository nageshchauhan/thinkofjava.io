[Back to Collection](../README.md)


## Differences in ConcurrentHashMap, synchronizedMap, Hashtable

### ConcurrentHashMap
1. We will get thread safety without locking total map, just with bucket level/segment level lock.
2. At a time multiple threads are allowed to operate on map in safe manner.
3. Read operations can be performed without lock but write operation can be performed with bucket level lock.
4. While one thread iterating map object, the other threads are allowed to modify map and we won't get `ConcurrentModificationException`.
5. Iterator of `ConcurrentHashMap` is fail-safe and won't raise `ConcurrentModificationException`.
6. `null` is not allowed for both key and value.
7. Introduced in 1.5 version.

### synchronizedMap
1. We will get thread safety by locking whole map object.
2. At a time only one thread is allowed to perform any operation on map.
3. Each read and write operations require total map object lock.
4. While one thread iterating map the other threads are not allowed to modify map otherwise we will get `ConcurrentModificationException`.
5. Iterator of synchronizedMap is fail-fast and it will raise `ConcurrentModificationException`.
6. `null` is allowed for both key and value.
7. Introduced in 1.2 version.

### Hashtable
1. We will get thread safety by locking whole map object.
2. At a time only one thread is allowed to perform any operation on map.
3. Each read and write operations require total map object lock.
4. While one thread iterating map the other threads are not allowed to modify map otherwise we will get `ConcurrentModificationException`.
5. Iterator of synchronizedMap is fail-fast and it will raise `ConcurrentModificationException`.
6. `null` is not allowed for both key and value.
7. Introduced in 1.0 version.


<br>

<div style="float:left">
  <a href="../6_concurrent_collection/dif_hashmap_and_concurrent_hashmap.md" style=""><-- Difference in HashMap and ConcurrentHashMap</a>
</div>


<div style="float:right">
  <a href="../6_concurrent_collection/copy_on_write_arraylist_class.md" style="">Next: CopyOnWriteArrayList class --></a>
</div>

<br>