import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7307Component } from './my-comp-7307.component';

describe('MyComp7307Component', () => {
  let component: MyComp7307Component;
  let fixture: ComponentFixture<MyComp7307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
