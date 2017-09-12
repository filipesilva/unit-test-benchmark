import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9719Component } from './my-comp-9719.component';

describe('MyComp9719Component', () => {
  let component: MyComp9719Component;
  let fixture: ComponentFixture<MyComp9719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
