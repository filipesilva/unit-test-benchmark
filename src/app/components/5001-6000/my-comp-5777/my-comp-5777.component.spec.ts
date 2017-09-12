import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5777Component } from './my-comp-5777.component';

describe('MyComp5777Component', () => {
  let component: MyComp5777Component;
  let fixture: ComponentFixture<MyComp5777Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5777Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5777Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
