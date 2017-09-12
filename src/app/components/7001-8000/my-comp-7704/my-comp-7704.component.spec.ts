import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7704Component } from './my-comp-7704.component';

describe('MyComp7704Component', () => {
  let component: MyComp7704Component;
  let fixture: ComponentFixture<MyComp7704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
