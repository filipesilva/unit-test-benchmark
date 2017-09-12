import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7795Component } from './my-comp-7795.component';

describe('MyComp7795Component', () => {
  let component: MyComp7795Component;
  let fixture: ComponentFixture<MyComp7795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
