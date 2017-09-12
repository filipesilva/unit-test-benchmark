import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9817Component } from './my-comp-9817.component';

describe('MyComp9817Component', () => {
  let component: MyComp9817Component;
  let fixture: ComponentFixture<MyComp9817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
