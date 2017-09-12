import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4951Component } from './my-comp-4951.component';

describe('MyComp4951Component', () => {
  let component: MyComp4951Component;
  let fixture: ComponentFixture<MyComp4951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
