import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6218Component } from './my-comp-6218.component';

describe('MyComp6218Component', () => {
  let component: MyComp6218Component;
  let fixture: ComponentFixture<MyComp6218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
