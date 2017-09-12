import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7622Component } from './my-comp-7622.component';

describe('MyComp7622Component', () => {
  let component: MyComp7622Component;
  let fixture: ComponentFixture<MyComp7622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
