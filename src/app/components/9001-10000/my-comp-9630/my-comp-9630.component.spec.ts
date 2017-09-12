import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9630Component } from './my-comp-9630.component';

describe('MyComp9630Component', () => {
  let component: MyComp9630Component;
  let fixture: ComponentFixture<MyComp9630Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9630Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9630Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
