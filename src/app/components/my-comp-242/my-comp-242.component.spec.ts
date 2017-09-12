import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp242Component } from './my-comp-242.component';

describe('MyComp242Component', () => {
  let component: MyComp242Component;
  let fixture: ComponentFixture<MyComp242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
