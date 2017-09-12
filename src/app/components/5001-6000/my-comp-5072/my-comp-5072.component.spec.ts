import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5072Component } from './my-comp-5072.component';

describe('MyComp5072Component', () => {
  let component: MyComp5072Component;
  let fixture: ComponentFixture<MyComp5072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
