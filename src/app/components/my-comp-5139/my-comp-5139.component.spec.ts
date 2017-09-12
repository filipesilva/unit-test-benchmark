import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5139Component } from './my-comp-5139.component';

describe('MyComp5139Component', () => {
  let component: MyComp5139Component;
  let fixture: ComponentFixture<MyComp5139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
