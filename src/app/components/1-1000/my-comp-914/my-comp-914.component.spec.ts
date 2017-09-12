import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp914Component } from './my-comp-914.component';

describe('MyComp914Component', () => {
  let component: MyComp914Component;
  let fixture: ComponentFixture<MyComp914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
