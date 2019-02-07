import { Component } from '@angular/core';

@Component({
    selector: 'app-car', // то как наша компонента должна называться извне, чтобы мы могли её подключить
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
})
export class CarComponent {
    public name = 'Toyota';
    public valueFuelTank = 60;
    public expenseFuel = 0.1;
    protected mileage = 0;
    protected opportunityDrive = 0;
    protected currentFuel = 0;
    public specifications = ['engine capacity - 100', 'maximum speed - 250', 'load capacity - 600'];
    protected visibleButton = true;
    /**
     * drive - метод который вычисляет:
     * 1.Возможное колличество километров, которые автомобиль имеет возможность проехать с имеющимся у него колличеством бензина
     * 2.Если возможное колличество километров меньше желаемого колличества, либо равно нулю - появляется кнопки 'Заправить' и общий пробег
     * составит - текущее значение плюс возможное, а колличество бензина составит ноль.
     * 3.Если возможное колличество километров больше желаемого колличества, то общий пробег составит текущее значение плюс желаемое,
     * а колличество бензина составит текущее значение минус затраченное на проезд желаемого колличества килллометров
     * @param value number
     */
    public drive(value): void {
        this.opportunityDrive = this.currentFuel / this.expenseFuel;
        if (this.opportunityDrive <= value) {
            this.mileage += this.opportunityDrive;
            this.currentFuel = 0;
            this.visibleButton = true;
            return console.log('Вам необходимо заправиться');
        }
        this.mileage += value;
        this.currentFuel = this.currentFuel - value * this.expenseFuel;
    }
    /**
     * refuel - метод который добавляет: колличество бензина в машине при заправке
     * и скрывает кнопку 'Заправить'
     * @param value number
     */
    public addFuel(value): void {
        this.currentFuel += value;
        this.visibleButton = false;
    }
    onClickHandlerDrive($event) {
        this.drive(10);
    }
    onClickHandlerFuel($event) {
        this.addFuel(10);
    }
}


