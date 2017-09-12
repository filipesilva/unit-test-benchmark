import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9523Component } from './my-comp-9523.component';

describe('MyComp9523Component', () => {
  let component: MyComp9523Component;
  let fixture: ComponentFixture<MyComp9523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
