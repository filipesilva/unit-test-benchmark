import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7099Component } from './my-comp-7099.component';

describe('MyComp7099Component', () => {
  let component: MyComp7099Component;
  let fixture: ComponentFixture<MyComp7099Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7099Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
