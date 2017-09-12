import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp718Component } from './my-comp-718.component';

describe('MyComp718Component', () => {
  let component: MyComp718Component;
  let fixture: ComponentFixture<MyComp718Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp718Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp718Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
