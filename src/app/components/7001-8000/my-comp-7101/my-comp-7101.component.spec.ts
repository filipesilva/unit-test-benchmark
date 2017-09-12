import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7101Component } from './my-comp-7101.component';

describe('MyComp7101Component', () => {
  let component: MyComp7101Component;
  let fixture: ComponentFixture<MyComp7101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
