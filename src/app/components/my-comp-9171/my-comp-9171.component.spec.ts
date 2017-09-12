import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9171Component } from './my-comp-9171.component';

describe('MyComp9171Component', () => {
  let component: MyComp9171Component;
  let fixture: ComponentFixture<MyComp9171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
