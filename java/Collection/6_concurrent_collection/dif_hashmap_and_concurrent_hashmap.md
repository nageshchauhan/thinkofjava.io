[Back to Collection](../README.md)


## Difference between HashMap and ConcurrentHashMap

### HashMap
1. It is **not thread safe**.
2. Relatively **performance is high** because thread are not required to wait to operate.
3. While one thread iterating `HashMap`, other threads are not allowed to modify `Map` otherwise we will get `ConcurrentModificationException` at runtime.
4. `Iterator` of `HashMap` is fail-fast and it throws `ConcurrentModificationException`.
5. `null` is allowed for both key and value.
6. Introduced in 1.2 version.

### ConcurrentHashMap
1. It is **thread safe**.
2. Relatively **performance is low** because some times threads are required to wait to operate. (if concurrencyLevel is crossed)
3. While one thread iterating `ConcurrentHashMap`, other threads are allowed to modify `Map` object in safe manner and it won't throw `ConcurrentModificationException`.
4. `Iterator` of `ConcurrentHashMap` is fail-safe.
5. `null` is not allowed for both key and value otherwise we will get `NullPointerException`.
6. Introduced in 1.5 version.


<Br>

[<-- ConcurrentMap interface and its implementation classes](../6_concurrent_collection/concurrentMap.md) &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; [Next: Difference in ConcurrentHashMap, synchronizedMap, and Hashtable -->](../6_concurrent_collection/dif_concurrentmap_synchronizedmap_hashtable.md)

<br>

