import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2648Component } from './my-comp-2648.component';

describe('MyComp2648Component', () => {
  let component: MyComp2648Component;
  let fixture: ComponentFixture<MyComp2648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
