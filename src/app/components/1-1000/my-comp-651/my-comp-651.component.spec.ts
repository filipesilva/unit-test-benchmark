import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp651Component } from './my-comp-651.component';

describe('MyComp651Component', () => {
  let component: MyComp651Component;
  let fixture: ComponentFixture<MyComp651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
