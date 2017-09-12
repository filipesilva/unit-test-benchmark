import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4533Component } from './my-comp-4533.component';

describe('MyComp4533Component', () => {
  let component: MyComp4533Component;
  let fixture: ComponentFixture<MyComp4533Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4533Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4533Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
