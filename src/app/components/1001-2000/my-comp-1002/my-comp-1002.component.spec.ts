import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1002Component } from './my-comp-1002.component';

describe('MyComp1002Component', () => {
  let component: MyComp1002Component;
  let fixture: ComponentFixture<MyComp1002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
