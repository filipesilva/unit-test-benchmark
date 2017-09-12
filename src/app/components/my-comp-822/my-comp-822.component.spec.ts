import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp822Component } from './my-comp-822.component';

describe('MyComp822Component', () => {
  let component: MyComp822Component;
  let fixture: ComponentFixture<MyComp822Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp822Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp822Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
