import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1474Component } from './my-comp-1474.component';

describe('MyComp1474Component', () => {
  let component: MyComp1474Component;
  let fixture: ComponentFixture<MyComp1474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
