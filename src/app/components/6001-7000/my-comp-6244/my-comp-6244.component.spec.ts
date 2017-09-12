import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6244Component } from './my-comp-6244.component';

describe('MyComp6244Component', () => {
  let component: MyComp6244Component;
  let fixture: ComponentFixture<MyComp6244Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6244Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6244Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
