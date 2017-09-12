import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2819Component } from './my-comp-2819.component';

describe('MyComp2819Component', () => {
  let component: MyComp2819Component;
  let fixture: ComponentFixture<MyComp2819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
