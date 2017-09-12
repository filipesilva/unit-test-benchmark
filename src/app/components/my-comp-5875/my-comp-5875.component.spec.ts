import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5875Component } from './my-comp-5875.component';

describe('MyComp5875Component', () => {
  let component: MyComp5875Component;
  let fixture: ComponentFixture<MyComp5875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
