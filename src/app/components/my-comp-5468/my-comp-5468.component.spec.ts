import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5468Component } from './my-comp-5468.component';

describe('MyComp5468Component', () => {
  let component: MyComp5468Component;
  let fixture: ComponentFixture<MyComp5468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
