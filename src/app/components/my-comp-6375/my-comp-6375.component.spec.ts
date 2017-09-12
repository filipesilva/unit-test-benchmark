import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6375Component } from './my-comp-6375.component';

describe('MyComp6375Component', () => {
  let component: MyComp6375Component;
  let fixture: ComponentFixture<MyComp6375Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6375Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
