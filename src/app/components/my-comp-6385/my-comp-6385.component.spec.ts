import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6385Component } from './my-comp-6385.component';

describe('MyComp6385Component', () => {
  let component: MyComp6385Component;
  let fixture: ComponentFixture<MyComp6385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
