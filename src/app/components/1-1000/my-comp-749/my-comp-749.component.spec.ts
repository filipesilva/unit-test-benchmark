import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp749Component } from './my-comp-749.component';

describe('MyComp749Component', () => {
  let component: MyComp749Component;
  let fixture: ComponentFixture<MyComp749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
