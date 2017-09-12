import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7414Component } from './my-comp-7414.component';

describe('MyComp7414Component', () => {
  let component: MyComp7414Component;
  let fixture: ComponentFixture<MyComp7414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
