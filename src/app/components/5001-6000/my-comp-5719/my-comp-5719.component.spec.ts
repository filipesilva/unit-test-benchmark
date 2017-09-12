import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5719Component } from './my-comp-5719.component';

describe('MyComp5719Component', () => {
  let component: MyComp5719Component;
  let fixture: ComponentFixture<MyComp5719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
