import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1645Component } from './my-comp-1645.component';

describe('MyComp1645Component', () => {
  let component: MyComp1645Component;
  let fixture: ComponentFixture<MyComp1645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
