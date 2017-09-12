import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7188Component } from './my-comp-7188.component';

describe('MyComp7188Component', () => {
  let component: MyComp7188Component;
  let fixture: ComponentFixture<MyComp7188Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7188Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7188Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
