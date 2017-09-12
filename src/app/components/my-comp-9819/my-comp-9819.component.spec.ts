import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9819Component } from './my-comp-9819.component';

describe('MyComp9819Component', () => {
  let component: MyComp9819Component;
  let fixture: ComponentFixture<MyComp9819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
