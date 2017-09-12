import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6161Component } from './my-comp-6161.component';

describe('MyComp6161Component', () => {
  let component: MyComp6161Component;
  let fixture: ComponentFixture<MyComp6161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
