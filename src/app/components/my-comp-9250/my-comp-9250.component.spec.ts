import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9250Component } from './my-comp-9250.component';

describe('MyComp9250Component', () => {
  let component: MyComp9250Component;
  let fixture: ComponentFixture<MyComp9250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
