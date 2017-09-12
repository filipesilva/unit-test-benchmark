import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7515Component } from './my-comp-7515.component';

describe('MyComp7515Component', () => {
  let component: MyComp7515Component;
  let fixture: ComponentFixture<MyComp7515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
