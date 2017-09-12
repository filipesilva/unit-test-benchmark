import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2641Component } from './my-comp-2641.component';

describe('MyComp2641Component', () => {
  let component: MyComp2641Component;
  let fixture: ComponentFixture<MyComp2641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
