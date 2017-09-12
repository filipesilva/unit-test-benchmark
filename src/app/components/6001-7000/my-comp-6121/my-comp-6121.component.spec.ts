import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6121Component } from './my-comp-6121.component';

describe('MyComp6121Component', () => {
  let component: MyComp6121Component;
  let fixture: ComponentFixture<MyComp6121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
