import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7759Component } from './my-comp-7759.component';

describe('MyComp7759Component', () => {
  let component: MyComp7759Component;
  let fixture: ComponentFixture<MyComp7759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
