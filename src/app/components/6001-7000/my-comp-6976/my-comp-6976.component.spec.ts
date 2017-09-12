import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6976Component } from './my-comp-6976.component';

describe('MyComp6976Component', () => {
  let component: MyComp6976Component;
  let fixture: ComponentFixture<MyComp6976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
