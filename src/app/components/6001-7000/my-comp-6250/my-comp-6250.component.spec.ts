import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6250Component } from './my-comp-6250.component';

describe('MyComp6250Component', () => {
  let component: MyComp6250Component;
  let fixture: ComponentFixture<MyComp6250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
