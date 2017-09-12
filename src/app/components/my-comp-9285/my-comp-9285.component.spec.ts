import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9285Component } from './my-comp-9285.component';

describe('MyComp9285Component', () => {
  let component: MyComp9285Component;
  let fixture: ComponentFixture<MyComp9285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
