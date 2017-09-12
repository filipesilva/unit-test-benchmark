import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6225Component } from './my-comp-6225.component';

describe('MyComp6225Component', () => {
  let component: MyComp6225Component;
  let fixture: ComponentFixture<MyComp6225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
