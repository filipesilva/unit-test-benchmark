import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7487Component } from './my-comp-7487.component';

describe('MyComp7487Component', () => {
  let component: MyComp7487Component;
  let fixture: ComponentFixture<MyComp7487Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7487Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
