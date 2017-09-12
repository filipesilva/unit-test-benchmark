import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp763Component } from './my-comp-763.component';

describe('MyComp763Component', () => {
  let component: MyComp763Component;
  let fixture: ComponentFixture<MyComp763Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp763Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp763Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
