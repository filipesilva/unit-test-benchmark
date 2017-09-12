import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2452Component } from './my-comp-2452.component';

describe('MyComp2452Component', () => {
  let component: MyComp2452Component;
  let fixture: ComponentFixture<MyComp2452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
