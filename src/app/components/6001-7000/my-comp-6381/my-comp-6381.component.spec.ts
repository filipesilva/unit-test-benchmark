import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6381Component } from './my-comp-6381.component';

describe('MyComp6381Component', () => {
  let component: MyComp6381Component;
  let fixture: ComponentFixture<MyComp6381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
