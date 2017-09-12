import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5123Component } from './my-comp-5123.component';

describe('MyComp5123Component', () => {
  let component: MyComp5123Component;
  let fixture: ComponentFixture<MyComp5123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
