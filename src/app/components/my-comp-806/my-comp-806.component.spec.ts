import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp806Component } from './my-comp-806.component';

describe('MyComp806Component', () => {
  let component: MyComp806Component;
  let fixture: ComponentFixture<MyComp806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
