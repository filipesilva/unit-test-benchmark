import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7566Component } from './my-comp-7566.component';

describe('MyComp7566Component', () => {
  let component: MyComp7566Component;
  let fixture: ComponentFixture<MyComp7566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
