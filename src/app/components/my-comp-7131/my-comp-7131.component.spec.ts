import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7131Component } from './my-comp-7131.component';

describe('MyComp7131Component', () => {
  let component: MyComp7131Component;
  let fixture: ComponentFixture<MyComp7131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
