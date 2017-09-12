import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5759Component } from './my-comp-5759.component';

describe('MyComp5759Component', () => {
  let component: MyComp5759Component;
  let fixture: ComponentFixture<MyComp5759Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5759Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5759Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
