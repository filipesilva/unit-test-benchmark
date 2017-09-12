import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp840Component } from './my-comp-840.component';

describe('MyComp840Component', () => {
  let component: MyComp840Component;
  let fixture: ComponentFixture<MyComp840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
