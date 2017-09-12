import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7843Component } from './my-comp-7843.component';

describe('MyComp7843Component', () => {
  let component: MyComp7843Component;
  let fixture: ComponentFixture<MyComp7843Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7843Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7843Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
