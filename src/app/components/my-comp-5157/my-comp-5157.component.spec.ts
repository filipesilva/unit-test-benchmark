import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5157Component } from './my-comp-5157.component';

describe('MyComp5157Component', () => {
  let component: MyComp5157Component;
  let fixture: ComponentFixture<MyComp5157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
