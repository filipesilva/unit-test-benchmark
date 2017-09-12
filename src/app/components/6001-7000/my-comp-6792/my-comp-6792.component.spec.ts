import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6792Component } from './my-comp-6792.component';

describe('MyComp6792Component', () => {
  let component: MyComp6792Component;
  let fixture: ComponentFixture<MyComp6792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
