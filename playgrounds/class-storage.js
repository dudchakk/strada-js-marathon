class Storage 
{
    obj = localStorage;
    key;
    
    constructor(key, value = null, isStorage = true) {
        this.key = key;
        this.obj.setItem(key, value);

        if(!isStorage) {
            this.obj = sessionStorage;
        }
    }

    get() {
        return this.obj.getItem(this.key);
    }

    set(value) {
        this.obj.setItem(this.key, value);
    }

    clear() {
        this.obj.setItem(this.key, null);
    }

    isEmpty() {
        return !!this.obj.getItem(this.key);
    }
};

let names = new Storage('names', 1);
names.set(2);
names.clear();
alert(names.isEmpty());