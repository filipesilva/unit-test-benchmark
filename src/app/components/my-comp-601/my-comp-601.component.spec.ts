import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp601Component } from './my-comp-601.component';

describe('MyComp601Component', () => {
  let component: MyComp601Component;
  let fixture: ComponentFixture<MyComp601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
