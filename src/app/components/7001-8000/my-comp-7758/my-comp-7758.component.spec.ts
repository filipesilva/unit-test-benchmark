import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7758Component } from './my-comp-7758.component';

describe('MyComp7758Component', () => {
  let component: MyComp7758Component;
  let fixture: ComponentFixture<MyComp7758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
