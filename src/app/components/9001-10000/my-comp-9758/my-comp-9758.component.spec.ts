import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9758Component } from './my-comp-9758.component';

describe('MyComp9758Component', () => {
  let component: MyComp9758Component;
  let fixture: ComponentFixture<MyComp9758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
