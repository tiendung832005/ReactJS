class Song{
    readonly id: number;
    private name: string
    private length: string
    constructor(id: number, name: string, length: string){
        this.id=id;
        this.name=name;
        this.length=length;
    }
    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }

    getLength(): string {
        return this.length;
    }

    setLength(length: string): void {
        this.length = length;
    }
}

let song = new Song(1, "em của ngày hôm qua", "3p");

console.log(`Tên: ${song.getName()}, Độ dài: ${song.getLength()}`);

song.setName('chúng ta của tương lai');
song.setLength("2p50s");

console.log(`Tên mới cập nhật: ${song.getName()}, Độ dài mới cập nhật: ${song.getLength()}`);
