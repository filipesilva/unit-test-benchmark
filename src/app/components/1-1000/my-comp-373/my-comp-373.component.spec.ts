import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp373Component } from './my-comp-373.component';

describe('MyComp373Component', () => {
  let component: MyComp373Component;
  let fixture: ComponentFixture<MyComp373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
