import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6929Component } from './my-comp-6929.component';

describe('MyComp6929Component', () => {
  let component: MyComp6929Component;
  let fixture: ComponentFixture<MyComp6929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
