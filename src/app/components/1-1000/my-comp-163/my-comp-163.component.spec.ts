import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp163Component } from './my-comp-163.component';

describe('MyComp163Component', () => {
  let component: MyComp163Component;
  let fixture: ComponentFixture<MyComp163Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp163Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp163Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
