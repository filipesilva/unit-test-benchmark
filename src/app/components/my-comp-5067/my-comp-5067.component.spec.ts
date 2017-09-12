import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5067Component } from './my-comp-5067.component';

describe('MyComp5067Component', () => {
  let component: MyComp5067Component;
  let fixture: ComponentFixture<MyComp5067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
