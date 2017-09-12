import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6118Component } from './my-comp-6118.component';

describe('MyComp6118Component', () => {
  let component: MyComp6118Component;
  let fixture: ComponentFixture<MyComp6118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
