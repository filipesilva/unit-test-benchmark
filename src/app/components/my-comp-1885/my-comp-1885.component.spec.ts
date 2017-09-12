import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1885Component } from './my-comp-1885.component';

describe('MyComp1885Component', () => {
  let component: MyComp1885Component;
  let fixture: ComponentFixture<MyComp1885Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1885Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
