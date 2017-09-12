import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9784Component } from './my-comp-9784.component';

describe('MyComp9784Component', () => {
  let component: MyComp9784Component;
  let fixture: ComponentFixture<MyComp9784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
