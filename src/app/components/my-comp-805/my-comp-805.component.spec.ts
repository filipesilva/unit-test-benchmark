import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp805Component } from './my-comp-805.component';

describe('MyComp805Component', () => {
  let component: MyComp805Component;
  let fixture: ComponentFixture<MyComp805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
