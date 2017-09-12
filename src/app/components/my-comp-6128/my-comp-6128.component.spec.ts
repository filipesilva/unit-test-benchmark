import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6128Component } from './my-comp-6128.component';

describe('MyComp6128Component', () => {
  let component: MyComp6128Component;
  let fixture: ComponentFixture<MyComp6128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
