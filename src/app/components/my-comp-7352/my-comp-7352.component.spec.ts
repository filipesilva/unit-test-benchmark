import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7352Component } from './my-comp-7352.component';

describe('MyComp7352Component', () => {
  let component: MyComp7352Component;
  let fixture: ComponentFixture<MyComp7352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
