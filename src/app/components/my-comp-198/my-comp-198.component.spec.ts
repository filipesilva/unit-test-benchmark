import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp198Component } from './my-comp-198.component';

describe('MyComp198Component', () => {
  let component: MyComp198Component;
  let fixture: ComponentFixture<MyComp198Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp198Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp198Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
