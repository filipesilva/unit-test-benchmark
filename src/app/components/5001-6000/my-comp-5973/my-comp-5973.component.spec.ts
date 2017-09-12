import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5973Component } from './my-comp-5973.component';

describe('MyComp5973Component', () => {
  let component: MyComp5973Component;
  let fixture: ComponentFixture<MyComp5973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
