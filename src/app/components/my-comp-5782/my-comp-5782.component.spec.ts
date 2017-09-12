import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5782Component } from './my-comp-5782.component';

describe('MyComp5782Component', () => {
  let component: MyComp5782Component;
  let fixture: ComponentFixture<MyComp5782Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5782Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5782Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
