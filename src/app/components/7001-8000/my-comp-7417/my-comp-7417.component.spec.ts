import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7417Component } from './my-comp-7417.component';

describe('MyComp7417Component', () => {
  let component: MyComp7417Component;
  let fixture: ComponentFixture<MyComp7417Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7417Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
