import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5883Component } from './my-comp-5883.component';

describe('MyComp5883Component', () => {
  let component: MyComp5883Component;
  let fixture: ComponentFixture<MyComp5883Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5883Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5883Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
