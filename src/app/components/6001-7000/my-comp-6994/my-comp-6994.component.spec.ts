import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6994Component } from './my-comp-6994.component';

describe('MyComp6994Component', () => {
  let component: MyComp6994Component;
  let fixture: ComponentFixture<MyComp6994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
