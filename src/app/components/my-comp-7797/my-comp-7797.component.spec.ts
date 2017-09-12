import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7797Component } from './my-comp-7797.component';

describe('MyComp7797Component', () => {
  let component: MyComp7797Component;
  let fixture: ComponentFixture<MyComp7797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
