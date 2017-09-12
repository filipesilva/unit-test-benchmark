import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6374Component } from './my-comp-6374.component';

describe('MyComp6374Component', () => {
  let component: MyComp6374Component;
  let fixture: ComponentFixture<MyComp6374Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6374Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
