import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6738Component } from './my-comp-6738.component';

describe('MyComp6738Component', () => {
  let component: MyComp6738Component;
  let fixture: ComponentFixture<MyComp6738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
