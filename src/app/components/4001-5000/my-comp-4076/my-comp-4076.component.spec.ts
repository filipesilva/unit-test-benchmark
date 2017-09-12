import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4076Component } from './my-comp-4076.component';

describe('MyComp4076Component', () => {
  let component: MyComp4076Component;
  let fixture: ComponentFixture<MyComp4076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
