import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp927Component } from './my-comp-927.component';

describe('MyComp927Component', () => {
  let component: MyComp927Component;
  let fixture: ComponentFixture<MyComp927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
