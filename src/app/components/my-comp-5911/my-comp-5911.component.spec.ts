import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5911Component } from './my-comp-5911.component';

describe('MyComp5911Component', () => {
  let component: MyComp5911Component;
  let fixture: ComponentFixture<MyComp5911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
