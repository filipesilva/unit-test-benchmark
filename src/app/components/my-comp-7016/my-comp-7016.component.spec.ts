import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7016Component } from './my-comp-7016.component';

describe('MyComp7016Component', () => {
  let component: MyComp7016Component;
  let fixture: ComponentFixture<MyComp7016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
