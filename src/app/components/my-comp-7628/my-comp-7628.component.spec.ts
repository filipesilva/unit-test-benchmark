import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7628Component } from './my-comp-7628.component';

describe('MyComp7628Component', () => {
  let component: MyComp7628Component;
  let fixture: ComponentFixture<MyComp7628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
