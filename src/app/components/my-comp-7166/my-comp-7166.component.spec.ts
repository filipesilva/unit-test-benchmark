import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7166Component } from './my-comp-7166.component';

describe('MyComp7166Component', () => {
  let component: MyComp7166Component;
  let fixture: ComponentFixture<MyComp7166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
