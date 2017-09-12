import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp273Component } from './my-comp-273.component';

describe('MyComp273Component', () => {
  let component: MyComp273Component;
  let fixture: ComponentFixture<MyComp273Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp273Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp273Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
