import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp440Component } from './my-comp-440.component';

describe('MyComp440Component', () => {
  let component: MyComp440Component;
  let fixture: ComponentFixture<MyComp440Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp440Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp440Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
