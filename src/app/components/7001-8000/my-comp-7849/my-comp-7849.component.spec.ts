import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7849Component } from './my-comp-7849.component';

describe('MyComp7849Component', () => {
  let component: MyComp7849Component;
  let fixture: ComponentFixture<MyComp7849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
