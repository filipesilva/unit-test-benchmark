import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9637Component } from './my-comp-9637.component';

describe('MyComp9637Component', () => {
  let component: MyComp9637Component;
  let fixture: ComponentFixture<MyComp9637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
