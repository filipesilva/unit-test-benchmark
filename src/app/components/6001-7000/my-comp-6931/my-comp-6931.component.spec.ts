import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6931Component } from './my-comp-6931.component';

describe('MyComp6931Component', () => {
  let component: MyComp6931Component;
  let fixture: ComponentFixture<MyComp6931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
