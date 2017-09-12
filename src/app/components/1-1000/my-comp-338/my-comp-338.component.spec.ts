import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp338Component } from './my-comp-338.component';

describe('MyComp338Component', () => {
  let component: MyComp338Component;
  let fixture: ComponentFixture<MyComp338Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp338Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp338Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
