import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6039Component } from './my-comp-6039.component';

describe('MyComp6039Component', () => {
  let component: MyComp6039Component;
  let fixture: ComponentFixture<MyComp6039Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6039Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6039Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
