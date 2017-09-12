import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9326Component } from './my-comp-9326.component';

describe('MyComp9326Component', () => {
  let component: MyComp9326Component;
  let fixture: ComponentFixture<MyComp9326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
