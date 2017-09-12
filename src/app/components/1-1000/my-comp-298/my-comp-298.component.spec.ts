import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp298Component } from './my-comp-298.component';

describe('MyComp298Component', () => {
  let component: MyComp298Component;
  let fixture: ComponentFixture<MyComp298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
