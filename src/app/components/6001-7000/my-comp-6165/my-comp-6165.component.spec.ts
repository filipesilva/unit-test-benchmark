import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6165Component } from './my-comp-6165.component';

describe('MyComp6165Component', () => {
  let component: MyComp6165Component;
  let fixture: ComponentFixture<MyComp6165Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6165Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6165Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
