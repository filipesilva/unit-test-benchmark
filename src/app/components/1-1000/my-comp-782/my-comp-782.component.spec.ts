import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp782Component } from './my-comp-782.component';

describe('MyComp782Component', () => {
  let component: MyComp782Component;
  let fixture: ComponentFixture<MyComp782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
