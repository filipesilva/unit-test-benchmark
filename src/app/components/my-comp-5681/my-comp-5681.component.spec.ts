import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5681Component } from './my-comp-5681.component';

describe('MyComp5681Component', () => {
  let component: MyComp5681Component;
  let fixture: ComponentFixture<MyComp5681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
