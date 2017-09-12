import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4610Component } from './my-comp-4610.component';

describe('MyComp4610Component', () => {
  let component: MyComp4610Component;
  let fixture: ComponentFixture<MyComp4610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
