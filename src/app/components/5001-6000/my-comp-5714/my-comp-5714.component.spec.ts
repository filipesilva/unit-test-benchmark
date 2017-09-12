import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5714Component } from './my-comp-5714.component';

describe('MyComp5714Component', () => {
  let component: MyComp5714Component;
  let fixture: ComponentFixture<MyComp5714Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5714Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5714Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
