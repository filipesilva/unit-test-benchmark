import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9471Component } from './my-comp-9471.component';

describe('MyComp9471Component', () => {
  let component: MyComp9471Component;
  let fixture: ComponentFixture<MyComp9471Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9471Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9471Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
