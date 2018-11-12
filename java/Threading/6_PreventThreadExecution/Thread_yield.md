[Back to Threading](../README.md)
# Prevent Thread Execution
## Thread.yield()

Theoretically, to yield means to let go, to give up, to surrender. A yielding thread tells the virtual machine that it's willing to let other threads be scheduled in its place.

yield tells the currently executing thread to give a chance to the thread that have equal priority in the Thread pool.

There is no guarantee that Yield will make the currently executing thread to runnable state immediately

###Signature of `yield()` method
`public static native void yield();`

