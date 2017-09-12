import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2651Component } from './my-comp-2651.component';

describe('MyComp2651Component', () => {
  let component: MyComp2651Component;
  let fixture: ComponentFixture<MyComp2651Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2651Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
