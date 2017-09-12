import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6493Component } from './my-comp-6493.component';

describe('MyComp6493Component', () => {
  let component: MyComp6493Component;
  let fixture: ComponentFixture<MyComp6493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
