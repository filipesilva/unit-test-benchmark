import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9634Component } from './my-comp-9634.component';

describe('MyComp9634Component', () => {
  let component: MyComp9634Component;
  let fixture: ComponentFixture<MyComp9634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
