import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp624Component } from './my-comp-624.component';

describe('MyComp624Component', () => {
  let component: MyComp624Component;
  let fixture: ComponentFixture<MyComp624Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp624Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
