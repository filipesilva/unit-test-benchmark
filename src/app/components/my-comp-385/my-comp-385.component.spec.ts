import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp385Component } from './my-comp-385.component';

describe('MyComp385Component', () => {
  let component: MyComp385Component;
  let fixture: ComponentFixture<MyComp385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
