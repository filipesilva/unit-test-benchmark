import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9765Component } from './my-comp-9765.component';

describe('MyComp9765Component', () => {
  let component: MyComp9765Component;
  let fixture: ComponentFixture<MyComp9765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
