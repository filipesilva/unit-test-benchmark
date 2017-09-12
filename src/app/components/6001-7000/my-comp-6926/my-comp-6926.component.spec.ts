import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6926Component } from './my-comp-6926.component';

describe('MyComp6926Component', () => {
  let component: MyComp6926Component;
  let fixture: ComponentFixture<MyComp6926Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6926Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6926Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
