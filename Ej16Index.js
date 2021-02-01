class square {
    constructor(side){
        this.perimeter = side*4;
        this.area = side*side;
        console.log('Este cuadro tiene ${side} cm de lado, su perímetro es ${this.perimeter} cm y su área ${this.area} cm3');
            }
};

const small = new square(2);
const medium = new square(5);
const big = new square(10);