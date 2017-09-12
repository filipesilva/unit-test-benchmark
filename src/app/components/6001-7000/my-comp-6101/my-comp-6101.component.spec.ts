import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6101Component } from './my-comp-6101.component';

describe('MyComp6101Component', () => {
  let component: MyComp6101Component;
  let fixture: ComponentFixture<MyComp6101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
