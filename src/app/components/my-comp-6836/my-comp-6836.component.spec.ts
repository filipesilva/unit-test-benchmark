import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6836Component } from './my-comp-6836.component';

describe('MyComp6836Component', () => {
  let component: MyComp6836Component;
  let fixture: ComponentFixture<MyComp6836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
