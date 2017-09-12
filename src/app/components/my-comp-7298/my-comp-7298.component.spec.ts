import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7298Component } from './my-comp-7298.component';

describe('MyComp7298Component', () => {
  let component: MyComp7298Component;
  let fixture: ComponentFixture<MyComp7298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
