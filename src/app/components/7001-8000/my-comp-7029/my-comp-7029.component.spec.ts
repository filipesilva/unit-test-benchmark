import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7029Component } from './my-comp-7029.component';

describe('MyComp7029Component', () => {
  let component: MyComp7029Component;
  let fixture: ComponentFixture<MyComp7029Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7029Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7029Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
