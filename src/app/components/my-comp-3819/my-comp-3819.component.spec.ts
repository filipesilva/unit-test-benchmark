import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3819Component } from './my-comp-3819.component';

describe('MyComp3819Component', () => {
  let component: MyComp3819Component;
  let fixture: ComponentFixture<MyComp3819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
