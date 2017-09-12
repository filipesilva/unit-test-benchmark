import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5360Component } from './my-comp-5360.component';

describe('MyComp5360Component', () => {
  let component: MyComp5360Component;
  let fixture: ComponentFixture<MyComp5360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
