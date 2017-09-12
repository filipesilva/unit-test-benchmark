import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9673Component } from './my-comp-9673.component';

describe('MyComp9673Component', () => {
  let component: MyComp9673Component;
  let fixture: ComponentFixture<MyComp9673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
