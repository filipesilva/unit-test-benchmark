import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7671Component } from './my-comp-7671.component';

describe('MyComp7671Component', () => {
  let component: MyComp7671Component;
  let fixture: ComponentFixture<MyComp7671Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7671Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7671Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
