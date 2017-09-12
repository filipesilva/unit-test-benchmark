import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2627Component } from './my-comp-2627.component';

describe('MyComp2627Component', () => {
  let component: MyComp2627Component;
  let fixture: ComponentFixture<MyComp2627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
