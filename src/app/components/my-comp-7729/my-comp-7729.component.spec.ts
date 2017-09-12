import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7729Component } from './my-comp-7729.component';

describe('MyComp7729Component', () => {
  let component: MyComp7729Component;
  let fixture: ComponentFixture<MyComp7729Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7729Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
