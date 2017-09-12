import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6508Component } from './my-comp-6508.component';

describe('MyComp6508Component', () => {
  let component: MyComp6508Component;
  let fixture: ComponentFixture<MyComp6508Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6508Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6508Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
