import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4819Component } from './my-comp-4819.component';

describe('MyComp4819Component', () => {
  let component: MyComp4819Component;
  let fixture: ComponentFixture<MyComp4819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
