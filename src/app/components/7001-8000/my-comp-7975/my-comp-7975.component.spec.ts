import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7975Component } from './my-comp-7975.component';

describe('MyComp7975Component', () => {
  let component: MyComp7975Component;
  let fixture: ComponentFixture<MyComp7975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
