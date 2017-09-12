import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp951Component } from './my-comp-951.component';

describe('MyComp951Component', () => {
  let component: MyComp951Component;
  let fixture: ComponentFixture<MyComp951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
