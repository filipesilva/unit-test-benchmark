import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5818Component } from './my-comp-5818.component';

describe('MyComp5818Component', () => {
  let component: MyComp5818Component;
  let fixture: ComponentFixture<MyComp5818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
