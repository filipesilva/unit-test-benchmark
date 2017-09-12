import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4310Component } from './my-comp-4310.component';

describe('MyComp4310Component', () => {
  let component: MyComp4310Component;
  let fixture: ComponentFixture<MyComp4310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
