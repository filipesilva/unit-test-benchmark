import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6377Component } from './my-comp-6377.component';

describe('MyComp6377Component', () => {
  let component: MyComp6377Component;
  let fixture: ComponentFixture<MyComp6377Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6377Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6377Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
