import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6404Component } from './my-comp-6404.component';

describe('MyComp6404Component', () => {
  let component: MyComp6404Component;
  let fixture: ComponentFixture<MyComp6404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
