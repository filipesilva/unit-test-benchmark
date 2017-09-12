import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6469Component } from './my-comp-6469.component';

describe('MyComp6469Component', () => {
  let component: MyComp6469Component;
  let fixture: ComponentFixture<MyComp6469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
