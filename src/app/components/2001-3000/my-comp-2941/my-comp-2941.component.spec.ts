import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2941Component } from './my-comp-2941.component';

describe('MyComp2941Component', () => {
  let component: MyComp2941Component;
  let fixture: ComponentFixture<MyComp2941Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2941Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2941Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
