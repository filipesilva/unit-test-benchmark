import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8390Component } from './my-comp-8390.component';

describe('MyComp8390Component', () => {
  let component: MyComp8390Component;
  let fixture: ComponentFixture<MyComp8390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
