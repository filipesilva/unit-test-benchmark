import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6160Component } from './my-comp-6160.component';

describe('MyComp6160Component', () => {
  let component: MyComp6160Component;
  let fixture: ComponentFixture<MyComp6160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
