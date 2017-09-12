import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6017Component } from './my-comp-6017.component';

describe('MyComp6017Component', () => {
  let component: MyComp6017Component;
  let fixture: ComponentFixture<MyComp6017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
