import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9435Component } from './my-comp-9435.component';

describe('MyComp9435Component', () => {
  let component: MyComp9435Component;
  let fixture: ComponentFixture<MyComp9435Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9435Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9435Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
