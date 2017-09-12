import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6975Component } from './my-comp-6975.component';

describe('MyComp6975Component', () => {
  let component: MyComp6975Component;
  let fixture: ComponentFixture<MyComp6975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
