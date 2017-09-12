import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9518Component } from './my-comp-9518.component';

describe('MyComp9518Component', () => {
  let component: MyComp9518Component;
  let fixture: ComponentFixture<MyComp9518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
