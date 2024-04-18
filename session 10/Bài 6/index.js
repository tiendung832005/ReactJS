"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getLength() {
        return this.length;
    }
    setLength(length) {
        this.length = length;
    }
}
let song = new Song(1, "em của ngày hôm qua", "3p");
console.log(`Tên: ${song.getName()}, Độ dài: ${song.getLength()}`);
song.setName('chúng ta của tương lai');
song.setLength("2p50s");
console.log(`Tên mới cập nhật: ${song.getName()}, Độ dài mới cập nhật: ${song.getLength()}`);
