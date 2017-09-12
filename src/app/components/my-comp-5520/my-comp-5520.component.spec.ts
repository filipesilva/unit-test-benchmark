import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5520Component } from './my-comp-5520.component';

describe('MyComp5520Component', () => {
  let component: MyComp5520Component;
  let fixture: ComponentFixture<MyComp5520Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5520Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5520Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
