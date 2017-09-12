import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1592Component } from './my-comp-1592.component';

describe('MyComp1592Component', () => {
  let component: MyComp1592Component;
  let fixture: ComponentFixture<MyComp1592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
