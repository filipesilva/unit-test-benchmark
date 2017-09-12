import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2680Component } from './my-comp-2680.component';

describe('MyComp2680Component', () => {
  let component: MyComp2680Component;
  let fixture: ComponentFixture<MyComp2680Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2680Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2680Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
