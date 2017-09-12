import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9615Component } from './my-comp-9615.component';

describe('MyComp9615Component', () => {
  let component: MyComp9615Component;
  let fixture: ComponentFixture<MyComp9615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
