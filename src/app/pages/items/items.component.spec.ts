import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ItemsComponent } from './items.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { MasterService } from 'src/app/service/master.service';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;
  let masterServiceMock: MasterService;
  const masterServiceMock1 = {
    getplaceorder: jasmine.createSpy('getplaceorder') // Creating a spy on the method
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsComponent ],
      providers:[MasterService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    masterServiceMock = TestBed.inject(MasterService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
  it("should be call placeholder",()=>{
    const items = {

      "userId": 21,
      "totalAmount": 34,
      "restaurantId":"S234" ,
      "deliveryAddress": "sfhdhfd",

    };
    expect(component.address).toBe(items)
  })
  it('should set orderObj property if logging data is available', () => {
    // Mocking localStorage getItem method
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify({ userId: 'yourUserId' }));

    // Recreating component to reflect the change in localStorage
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.orderObj).toEqual('yourUserId');
  });
 
  it('should place order and close quantity model on successful response', fakeAsync(() => {
    const items = {
      userId: 'testUserId',
      totalAmount: 10, // Mocking price
      restaurantId: 'testRestaurantId',
      deliveryAddress: 'testAddress'
    };
    
    masterServiceMock1.getplaceorder.and.returnValue(of({ result: true }));

    // Trigger the function that subscribes to masterService.getplaceorder(items)
    component.placeorder();

    // Simulate the asynchronous behavior of the subscription
    tick();

    // Expectation: alert should be called with 'Order Placed'
    expect(window.alert).toHaveBeenCalledWith('Order Placed');

    // Expectation: closeQtyModel should be called
    expect(component.closeQtyModel).toHaveBeenCalled();
  }));

  it('should show an alert when order placement fails', fakeAsync(() => {
    masterServiceMock1.getplaceorder.and.returnValue(of({ result: false, message: 'Authentication failure' }));

    // Trigger the function that subscribes to masterService.getplaceorder(items)
    component.placeorder();

    // Simulate the asynchronous behavior of the subscription
    tick();

    // Expectation: alert should be called with the error message
    expect(window.alert).toHaveBeenCalledWith('Authentication failure');
  }));

  it('should show an alert when the user is not logged in', fakeAsync(() => {
    component.orderObj = 0; // Simulating user not logged in
    
    // Trigger the function that subscribes to masterService.getplaceorder(items)
    component.placeorder();

    // Expectation: alert should be called with 'Login to continue'
    expect(window.alert).toHaveBeenCalledWith('Login to continue');
  }));
});
