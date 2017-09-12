import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp645Component } from './my-comp-645.component';

describe('MyComp645Component', () => {
  let component: MyComp645Component;
  let fixture: ComponentFixture<MyComp645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
