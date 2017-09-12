import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9247Component } from './my-comp-9247.component';

describe('MyComp9247Component', () => {
  let component: MyComp9247Component;
  let fixture: ComponentFixture<MyComp9247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
