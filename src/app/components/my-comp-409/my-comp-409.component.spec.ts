import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp409Component } from './my-comp-409.component';

describe('MyComp409Component', () => {
  let component: MyComp409Component;
  let fixture: ComponentFixture<MyComp409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
