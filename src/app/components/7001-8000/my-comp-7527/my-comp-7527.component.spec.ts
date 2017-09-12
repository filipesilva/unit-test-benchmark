import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7527Component } from './my-comp-7527.component';

describe('MyComp7527Component', () => {
  let component: MyComp7527Component;
  let fixture: ComponentFixture<MyComp7527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
