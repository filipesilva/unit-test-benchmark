import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5362Component } from './my-comp-5362.component';

describe('MyComp5362Component', () => {
  let component: MyComp5362Component;
  let fixture: ComponentFixture<MyComp5362Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5362Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5362Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
