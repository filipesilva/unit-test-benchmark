import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7840Component } from './my-comp-7840.component';

describe('MyComp7840Component', () => {
  let component: MyComp7840Component;
  let fixture: ComponentFixture<MyComp7840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
