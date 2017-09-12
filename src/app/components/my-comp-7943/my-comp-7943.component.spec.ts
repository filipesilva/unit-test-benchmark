import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7943Component } from './my-comp-7943.component';

describe('MyComp7943Component', () => {
  let component: MyComp7943Component;
  let fixture: ComponentFixture<MyComp7943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
