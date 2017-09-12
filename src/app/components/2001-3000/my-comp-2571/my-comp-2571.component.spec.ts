import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2571Component } from './my-comp-2571.component';

describe('MyComp2571Component', () => {
  let component: MyComp2571Component;
  let fixture: ComponentFixture<MyComp2571Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2571Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
