import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2725Component } from './my-comp-2725.component';

describe('MyComp2725Component', () => {
  let component: MyComp2725Component;
  let fixture: ComponentFixture<MyComp2725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
