import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5533Component } from './my-comp-5533.component';

describe('MyComp5533Component', () => {
  let component: MyComp5533Component;
  let fixture: ComponentFixture<MyComp5533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
