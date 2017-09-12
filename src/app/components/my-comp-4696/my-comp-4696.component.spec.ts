import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4696Component } from './my-comp-4696.component';

describe('MyComp4696Component', () => {
  let component: MyComp4696Component;
  let fixture: ComponentFixture<MyComp4696Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4696Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4696Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
