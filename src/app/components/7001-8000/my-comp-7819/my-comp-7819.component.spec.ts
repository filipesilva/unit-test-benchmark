import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7819Component } from './my-comp-7819.component';

describe('MyComp7819Component', () => {
  let component: MyComp7819Component;
  let fixture: ComponentFixture<MyComp7819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
