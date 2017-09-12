import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp90Component } from './my-comp-90.component';

describe('MyComp90Component', () => {
  let component: MyComp90Component;
  let fixture: ComponentFixture<MyComp90Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp90Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
