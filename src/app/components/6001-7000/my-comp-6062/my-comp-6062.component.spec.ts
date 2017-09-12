import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6062Component } from './my-comp-6062.component';

describe('MyComp6062Component', () => {
  let component: MyComp6062Component;
  let fixture: ComponentFixture<MyComp6062Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6062Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6062Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
