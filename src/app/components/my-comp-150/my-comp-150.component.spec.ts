import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp150Component } from './my-comp-150.component';

describe('MyComp150Component', () => {
  let component: MyComp150Component;
  let fixture: ComponentFixture<MyComp150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
