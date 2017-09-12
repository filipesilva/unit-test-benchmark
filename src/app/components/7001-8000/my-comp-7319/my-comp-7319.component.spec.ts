import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7319Component } from './my-comp-7319.component';

describe('MyComp7319Component', () => {
  let component: MyComp7319Component;
  let fixture: ComponentFixture<MyComp7319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
