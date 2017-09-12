import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4967Component } from './my-comp-4967.component';

describe('MyComp4967Component', () => {
  let component: MyComp4967Component;
  let fixture: ComponentFixture<MyComp4967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
