import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp328Component } from './my-comp-328.component';

describe('MyComp328Component', () => {
  let component: MyComp328Component;
  let fixture: ComponentFixture<MyComp328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
