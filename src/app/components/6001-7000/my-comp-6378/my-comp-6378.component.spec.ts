import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6378Component } from './my-comp-6378.component';

describe('MyComp6378Component', () => {
  let component: MyComp6378Component;
  let fixture: ComponentFixture<MyComp6378Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6378Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
