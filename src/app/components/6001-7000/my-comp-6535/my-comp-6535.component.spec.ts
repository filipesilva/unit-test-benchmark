import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6535Component } from './my-comp-6535.component';

describe('MyComp6535Component', () => {
  let component: MyComp6535Component;
  let fixture: ComponentFixture<MyComp6535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
