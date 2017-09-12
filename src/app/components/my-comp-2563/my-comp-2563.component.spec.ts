import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2563Component } from './my-comp-2563.component';

describe('MyComp2563Component', () => {
  let component: MyComp2563Component;
  let fixture: ComponentFixture<MyComp2563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
