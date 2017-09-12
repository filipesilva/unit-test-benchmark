import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7981Component } from './my-comp-7981.component';

describe('MyComp7981Component', () => {
  let component: MyComp7981Component;
  let fixture: ComponentFixture<MyComp7981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
