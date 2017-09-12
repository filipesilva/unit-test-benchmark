import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6557Component } from './my-comp-6557.component';

describe('MyComp6557Component', () => {
  let component: MyComp6557Component;
  let fixture: ComponentFixture<MyComp6557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
