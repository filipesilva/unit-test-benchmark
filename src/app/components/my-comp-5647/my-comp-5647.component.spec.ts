import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5647Component } from './my-comp-5647.component';

describe('MyComp5647Component', () => {
  let component: MyComp5647Component;
  let fixture: ComponentFixture<MyComp5647Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5647Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
