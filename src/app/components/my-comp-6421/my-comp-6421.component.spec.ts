import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6421Component } from './my-comp-6421.component';

describe('MyComp6421Component', () => {
  let component: MyComp6421Component;
  let fixture: ComponentFixture<MyComp6421Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6421Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6421Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
