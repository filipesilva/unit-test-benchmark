import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7911Component } from './my-comp-7911.component';

describe('MyComp7911Component', () => {
  let component: MyComp7911Component;
  let fixture: ComponentFixture<MyComp7911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
