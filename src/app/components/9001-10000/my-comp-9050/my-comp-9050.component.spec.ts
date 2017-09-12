import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9050Component } from './my-comp-9050.component';

describe('MyComp9050Component', () => {
  let component: MyComp9050Component;
  let fixture: ComponentFixture<MyComp9050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
