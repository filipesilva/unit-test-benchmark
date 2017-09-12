import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp967Component } from './my-comp-967.component';

describe('MyComp967Component', () => {
  let component: MyComp967Component;
  let fixture: ComponentFixture<MyComp967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
