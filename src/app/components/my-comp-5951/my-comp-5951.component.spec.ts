import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5951Component } from './my-comp-5951.component';

describe('MyComp5951Component', () => {
  let component: MyComp5951Component;
  let fixture: ComponentFixture<MyComp5951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
