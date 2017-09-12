import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9117Component } from './my-comp-9117.component';

describe('MyComp9117Component', () => {
  let component: MyComp9117Component;
  let fixture: ComponentFixture<MyComp9117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
