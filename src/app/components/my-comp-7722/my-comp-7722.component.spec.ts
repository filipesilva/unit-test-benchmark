import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7722Component } from './my-comp-7722.component';

describe('MyComp7722Component', () => {
  let component: MyComp7722Component;
  let fixture: ComponentFixture<MyComp7722Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7722Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7722Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
