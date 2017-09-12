import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6317Component } from './my-comp-6317.component';

describe('MyComp6317Component', () => {
  let component: MyComp6317Component;
  let fixture: ComponentFixture<MyComp6317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
