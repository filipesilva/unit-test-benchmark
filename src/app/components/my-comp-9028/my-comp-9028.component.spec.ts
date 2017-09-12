import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9028Component } from './my-comp-9028.component';

describe('MyComp9028Component', () => {
  let component: MyComp9028Component;
  let fixture: ComponentFixture<MyComp9028Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9028Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
