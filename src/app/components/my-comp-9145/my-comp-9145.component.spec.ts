import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9145Component } from './my-comp-9145.component';

describe('MyComp9145Component', () => {
  let component: MyComp9145Component;
  let fixture: ComponentFixture<MyComp9145Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9145Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9145Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
