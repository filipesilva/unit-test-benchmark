import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5619Component } from './my-comp-5619.component';

describe('MyComp5619Component', () => {
  let component: MyComp5619Component;
  let fixture: ComponentFixture<MyComp5619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
