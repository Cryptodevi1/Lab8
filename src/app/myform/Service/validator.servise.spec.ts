import { TestBed } from "@angular/core/testing";
import { ValidatorDateService } from "./validator.servise";
describe('ValidatorService',()=>{
    let servise: ValidatorDateService;
    beforeEach(()=>{
        TestBed.configureTestingModule({});
        servise=TestBed.inject(ValidatorDateService);
    });
    it('should be created', ()=> {
        expect(servise).toBeTruthy();
    });
    it('Перевіряємо для дати 15.25.875 результата False',( )=>{
        let s = servise.validate_date('15.25.875');
        expect(s).toBe(false);
    });
    it('Перевіряємо для дати 15.25.1875 результата False',( )=>{
        let s = servise.validate_date('15.25.875');
        expect(s).toBe(false);
    });
    it('Перевіряємо для дати 15.02.875 результата False',( )=>{
        let s = servise.validate_date('15.02.1875');
        expect(s).toBe(true);
    });
})