import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6923Component } from './my-comp-6923.component';

describe('MyComp6923Component', () => {
  let component: MyComp6923Component;
  let fixture: ComponentFixture<MyComp6923Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6923Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6923Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
