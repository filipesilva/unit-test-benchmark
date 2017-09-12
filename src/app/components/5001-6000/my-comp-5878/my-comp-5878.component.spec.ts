import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5878Component } from './my-comp-5878.component';

describe('MyComp5878Component', () => {
  let component: MyComp5878Component;
  let fixture: ComponentFixture<MyComp5878Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5878Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5878Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
