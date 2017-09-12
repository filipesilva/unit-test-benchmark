import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4385Component } from './my-comp-4385.component';

describe('MyComp4385Component', () => {
  let component: MyComp4385Component;
  let fixture: ComponentFixture<MyComp4385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
