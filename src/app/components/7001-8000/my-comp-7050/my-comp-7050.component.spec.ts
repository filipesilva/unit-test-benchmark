import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7050Component } from './my-comp-7050.component';

describe('MyComp7050Component', () => {
  let component: MyComp7050Component;
  let fixture: ComponentFixture<MyComp7050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
