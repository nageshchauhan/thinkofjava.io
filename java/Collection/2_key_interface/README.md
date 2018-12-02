[Back to Collection](../README.md)

# Important interface in Collection

### 1) Collection(I)<br>

If we want to represent a group of individual object as a single entity then we should go for collection. Collection interface defines the most common methods which are applicable for any collection object. In general collection interface is considered as root interface of collection framework(In terms of functionality).

There is no concrete class which implements collection interface directly.

#### Difference between Collection(I) and Collections(Class)

Collection is an interface. If we want to represent a group of individual objects as a single entity then we should go for collection.

Collections is a utility class present in `java.util` package to define several utility methods for Collection objects (like sorting, searching etc.)


### 2) List(I)

It is child interface of Collection. If we want to represent a group of individual objects as a single entity where duplicates are allowed and insertion order must be preserved then we should go for List.

3) Set

4) SortedSet

5) NavigableSet

6) Queue

7) Map

8) SortedMap

9 ) NavigableMap 