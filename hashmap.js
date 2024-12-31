
function hashObject (key, value, nextNode = null) {

    const getKey = () => key
    const getValue = () => value
    const getNextNode = () => nextNode
    const setValue = (newValue) => {value = newValue}
    const setNextNode = (newNode) => {nextNode = newNode}

    return {getKey, getValue, getNextNode, setValue, setNextNode}
}

function createHashmap(loadFactor, capacity = 16) {
    let hashmap = new Array(capacity).fill(null)

    const hash = (key) => {
        let hashCode = 0
      
        const primeNumber = 31
        
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
            hashCode = hashCode % capacity
        }
        return hashCode
    }

    const set = (newKey, newValue) => {
        
        let hashCode = hash(newKey)

        if (!hashmap[hashCode]) {
            hashmap[hashCode] = hashObject(newKey, newValue, null)
            return
        } 
        
        let current = hashmap[hashCode]

        if (current.getKey() == newKey) {
            current.setValue(newValue)
            return
        }
        
        while (current.getNextNode()) {
            current = current.getNextNode()
            if (current.getKey() === newKey) {
                current.setValue(newValue)
                return
            }
        }

        current.setNextNode(hashObject(newKey, newValue))
        
    }


    const get = (key) => {

        let hashCode = hash(key)

        if (!hashmap[hashCode]) {
            return null
        }

        let current = hashmap[hashCode]

        while (current) {
            if (current.getKey() == key) {
                return current.getValue()
            }
            current = current.getNextNode()
        }

        return null

    }

    const has = (key) => {

        let hashCode = hash(key)

        if (!hashmap[hashCode]) {
            return false
        }

        let current = hashmap[hashCode]

        while (current) {
            if (current.getKey() == key) {
                return true
            }
            current = current.getNextNode()
        }

        return false
        
    }

    const remove = (key) => {

        let hashCode = hash(key)

        if (!hashmap[hashCode]) {
            return false
        }

        if (hashmap[hashCode].getKey() == key) {
            hashmap[hashCode] = hashmap[hashCode].getNextNode()
            return true
        }

        let current = hashmap[hashCode]

        while (current.getNextNode()) {
            if (current.getNextNode().getKey() == key) {
                current.setNextNode(current.getNextNode().getNextNode())
                return true
            }
            current = current.getNextNode()
        }

        return false
        
    }



    return {hash, set, get, has, remove}
}