import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7513Component } from './my-comp-7513.component';

describe('MyComp7513Component', () => {
  let component: MyComp7513Component;
  let fixture: ComponentFixture<MyComp7513Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7513Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7513Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
