import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6359Component } from './my-comp-6359.component';

describe('MyComp6359Component', () => {
  let component: MyComp6359Component;
  let fixture: ComponentFixture<MyComp6359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
