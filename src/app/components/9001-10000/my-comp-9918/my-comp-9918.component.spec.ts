import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9918Component } from './my-comp-9918.component';

describe('MyComp9918Component', () => {
  let component: MyComp9918Component;
  let fixture: ComponentFixture<MyComp9918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
