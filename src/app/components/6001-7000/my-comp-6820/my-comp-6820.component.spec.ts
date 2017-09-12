import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6820Component } from './my-comp-6820.component';

describe('MyComp6820Component', () => {
  let component: MyComp6820Component;
  let fixture: ComponentFixture<MyComp6820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
