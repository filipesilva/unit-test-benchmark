import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1299Component } from './my-comp-1299.component';

describe('MyComp1299Component', () => {
  let component: MyComp1299Component;
  let fixture: ComponentFixture<MyComp1299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
