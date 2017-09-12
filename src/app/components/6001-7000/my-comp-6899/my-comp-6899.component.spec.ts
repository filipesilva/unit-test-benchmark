import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6899Component } from './my-comp-6899.component';

describe('MyComp6899Component', () => {
  let component: MyComp6899Component;
  let fixture: ComponentFixture<MyComp6899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
