import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1902Component } from './my-comp-1902.component';

describe('MyComp1902Component', () => {
  let component: MyComp1902Component;
  let fixture: ComponentFixture<MyComp1902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
