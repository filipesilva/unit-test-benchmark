import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5120Component } from './my-comp-5120.component';

describe('MyComp5120Component', () => {
  let component: MyComp5120Component;
  let fixture: ComponentFixture<MyComp5120Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5120Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5120Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
