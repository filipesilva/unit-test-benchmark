import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6566Component } from './my-comp-6566.component';

describe('MyComp6566Component', () => {
  let component: MyComp6566Component;
  let fixture: ComponentFixture<MyComp6566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
