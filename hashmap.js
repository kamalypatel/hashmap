
function hashObject (key, value, nextNode = null) {
    let key = key
    let value = value
    let nextNode = nextNode

    const getKey = () => key
    const getValue = () => value
    const getNextNode = () => nextNode
    const setValue = (newValue) => {value = newValue}
    const setNextNode = (newNode) => {nextNode = newNode}

    return {getKey, getValue, getNextNode, setValue, setNextNode}
}

let hashmap = []

function createHashmap(loadFactor, capacity = 16) {
    
    const hash = (key) => {
        let hashCode = 0
      
        const primeNumber = 31
        
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
            hashCode = hashCode % capacity
        }
        return hashCode
    }

    const set = (key, value) => {
        
        let hashCode = hash(key)

        hashmap[hashCode]

    }

    return {hash}
}