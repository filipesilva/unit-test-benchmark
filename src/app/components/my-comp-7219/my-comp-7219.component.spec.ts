import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7219Component } from './my-comp-7219.component';

describe('MyComp7219Component', () => {
  let component: MyComp7219Component;
  let fixture: ComponentFixture<MyComp7219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
