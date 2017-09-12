import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp945Component } from './my-comp-945.component';

describe('MyComp945Component', () => {
  let component: MyComp945Component;
  let fixture: ComponentFixture<MyComp945Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp945Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp945Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
